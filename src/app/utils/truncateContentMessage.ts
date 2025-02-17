export const truncateContent = (content: string, maxLength: number): string =>
    content.length > maxLength ? `${content.slice(0, maxLength)}...` : content;
