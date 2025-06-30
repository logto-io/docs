export type DebugLogger = {
  log: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

export function createDebugLogger(isDebugMode: boolean): DebugLogger {
  return {
    log: (...args: unknown[]) => {
      if (isDebugMode) {
        console.log(...args);
      }
    },
    warn: (...args: unknown[]) => {
      if (isDebugMode) {
        console.warn(...args);
      }
    },
    error: (...args: unknown[]) => {
      if (isDebugMode) {
        console.error(...args);
      }
    },
  };
}
