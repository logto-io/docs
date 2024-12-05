declare interface Window {
  plausible?: (action: string, ...args: unknown[]) => void;
}
