import type { INavigator } from '@/shared/types/types';

export const getDeviceMemory = (): number | null => {
    const nav = navigator as INavigator;

    if (nav.deviceMemory) {
        return nav.deviceMemory;
    }

    return null;
};
