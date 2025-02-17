import type { INetworkInfo } from '@/feature/network-info/types/types';

export const getNetworkInfo = () => {
    if ('connection' in navigator) {
        const connection = navigator.connection as INetworkInfo;

        return {
            type: connection.type || 'unknown',
            effectiveType: connection.effectiveType || 'unknown',
            downlink: connection.downlink || 0,
            rtt: connection.rtt || 0,
            saveData: connection.saveData || false,
        };
    }

    return null;
};
