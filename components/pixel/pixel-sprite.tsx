interface ColorPath {
  fill: string;
  d: string;
}

/** 缓存精灵帧路径,避免重复解析与 GC 压力 */
const PATHS_CACHE = new Map<string, ColorPath[]>();

/**
 * 将一帧画面中所有相同颜色的连续像素块合并为单一 SVG path 路径
 * 节点数量从以往的数百个 `<rect>` 锐降为每色仅 1 个 `<path>`
 * 极大降低浏览器 SVG 渲染树深度与重绘面积
 */
function frameToPaths(frame: readonly string[], palette: Record<string, string>): ColorPath[] {
  const paletteKey = Object.entries(palette)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}:${v}`)
    .join(",");
  const cacheKey = `${frame.join("/")}|${paletteKey}`;
  const cached = PATHS_CACHE.get(cacheKey);
  if (cached) return cached;

  const colorMap: Record<string, string[]> = {};

  frame.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      const fill = palette[key];
      if (!fill) {
        x += 1;
        continue;
      }
      let width = 1;
      while (x + width < row.length && row[x + width] === key) width += 1;
      if (!colorMap[fill]) colorMap[fill] = [];
      colorMap[fill].push(`M${x} ${y}h${width}v1h-${width}Z`);
      x += width;
    }
  });

  const result: ColorPath[] = Object.entries(colorMap).map(([fill, dList]) => ({
    fill,
    d: dList.join(""),
  }));

  if (PATHS_CACHE.size > 500) {
    PATHS_CACHE.clear();
  }
  PATHS_CACHE.set(cacheKey, result);
  return result;
}

interface PixelSpriteProps {
  frames: readonly (readonly string[])[];
  palette: Record<string, string>;
  /** 单个像素的显示边长 */
  scale?: number;
  /** 播放一轮的毫秒数 */
  duration?: number;
  className?: string;
  label: string;
  /** 是否播放多帧轮播动画,离屏或非聚焦时设为 false */
  animated?: boolean;
}

export function PixelSprite({
  frames,
  palette,
  scale = 4,
  duration = 720,
  className,
  label,
  animated = true,
}: PixelSpriteProps) {
  if (!frames.length) return null;

  const width = frames[0][0]?.length ?? 0;
  const height = frames[0].length;
  const total = frames.length;
  const keyTimes = frames.map((_, index) => index / total).join(";");
  const renderedFrames = animated ? frames : [frames[0]];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      shapeRendering="crispEdges"
      role="img"
      aria-label={label}
      className={className}
      style={{ imageRendering: "pixelated", flexShrink: 0 }}
    >
      <title>{label}</title>
      {renderedFrames.map((frame, frameIndex) => {
        const values = frames.map((_, index) => (index === frameIndex ? 1 : 0)).join(";");
        const paths = frameToPaths(frame, palette);
        return (
          <g key={frameIndex} opacity={frameIndex === 0 ? 1 : 0}>
            {total > 1 && animated ? (
              <animate
                attributeName="opacity"
                values={values}
                keyTimes={keyTimes}
                calcMode="discrete"
                dur={`${duration}ms`}
                repeatCount="indefinite"
              />
            ) : null}
            {paths.map((p) => (
              <path key={p.fill} d={p.d} fill={p.fill} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
