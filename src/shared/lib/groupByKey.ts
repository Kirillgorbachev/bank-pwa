export const groupByKey = <T>(data: T[], groupBy: (item: T) => string): Record<string, T[]> =>
    data.reduce<Record<string, T[]>>((acc, item) => {
        const key = groupBy(item) || 'unknown';

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(item);

        return acc;
    }, {});
