import { useMemo } from 'react';

import { groupByKey } from '@/shared/lib/groupByKey';
import { groupedToArray } from '@/shared/lib/groupedToArray';

type TGroupedData<T> = {
    groupKey: string;
    items: T[];
};

export const useGroupedData = <T>(data: T[], groupBy: (item: T) => string): TGroupedData<T>[] =>
    useMemo(() => {
        if (data.length === 0) {
            return [];
        }

        const grouped = groupByKey(data, groupBy);

        return groupedToArray(grouped);
    }, [data, groupBy]);
