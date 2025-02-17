export function render<T>(map: Record<string, T>, type: string, defaultIcon?: T): T | undefined {
    return map[type] ?? defaultIcon;
}
