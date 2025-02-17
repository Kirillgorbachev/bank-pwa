type TGroupedData<T> = {
    groupKey: string;
    items: T[];
};

export const groupedToArray = <T>(grouped: Record<string, T[]>): TGroupedData<T>[] => {
    if (Object.keys(grouped).length === 0) {
        return [];
    }

    return Object.entries(grouped).map(([key, items]) => ({
        groupKey: key || 'unknown',
        items,
    }));
};
