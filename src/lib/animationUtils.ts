// Small helper to throttle calls using requestAnimationFrame.
// Use this for scroll or mouse handlers to avoid layout thrashing.

export function rafThrottle<T extends (...args: unknown[]) => void>(fn: T) {
  let ticking = false;
  let lastArgs: unknown[] | null = null;

  return (...args: unknown[]) => {
    lastArgs = args;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        if (lastArgs) fn(...(lastArgs as unknown[]));
        lastArgs = null;
        ticking = false;
      });
    }
  };
}

export default rafThrottle;
