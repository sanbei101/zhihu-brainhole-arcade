let statusPromise: Promise<boolean> | null = null;

export function getZhihuVoteStatus(): Promise<boolean> {
  if (!statusPromise) {
    statusPromise = fetch("/api/auth/zhihu/status")
      .then(async (response) => {
        if (!response.ok) return false;
        const data: unknown = await response.json();
        return typeof data === "object" && data !== null && "voted" in data && data.voted === true;
      })
      .catch(() => false);
  }

  return statusPromise;
}
