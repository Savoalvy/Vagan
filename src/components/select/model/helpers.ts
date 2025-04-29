export const normalizeValue = (label: string): string =>
    label.toLowerCase().trim().replace(/\s+/g, '-');
