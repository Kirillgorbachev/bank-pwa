export const sortByDate = <T>(items: T[], dateKey: keyof T, order: 'asc' | 'desc' = 'desc'): T[] => {
    const modifier = order === 'desc' ? 1 : -1;

    return items.sort((a, b) => {
        const dateA = new Date(a[dateKey] as string).getTime();
        const dateB = new Date(b[dateKey] as string).getTime();

        return (dateB - dateA) * modifier;
    });
};
