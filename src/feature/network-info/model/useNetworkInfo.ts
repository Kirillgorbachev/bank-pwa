import { useEffect, useState } from 'react';

import { getNetworkInfo } from '../api/network';

import type { INetworkInfo } from '@/feature/network-info/types/types';
import type { INavigator } from '@/shared/types/types';

export const useNetworkInfo = () => {
    const [networkInfo, setNetworkInfo] = useState<INetworkInfo | null>(getNetworkInfo());

    useEffect(() => {
        const connection = (navigator as INavigator).connection as any;

        const updateNetworkInfo = () => {
            setNetworkInfo(getNetworkInfo());
        };

        if (connection) {
            connection.addEventListener('change', updateNetworkInfo);
        }

        return () => {
            if (connection) {
                connection.removeEventListener('change', updateNetworkInfo);
            }
        };
    }, []);

    return networkInfo;
};
