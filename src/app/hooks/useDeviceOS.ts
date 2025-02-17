import { useEffect, useState } from 'react';
import mobileDetect from 'mobile-detect';

export type TDeviceInfo = {
    osName: 'iOS' | 'AndroidOS' | 'desktop';
};

export const useDeviceOS = (): TDeviceInfo => {
    const [deviceInfo, setDeviceInfo] = useState<TDeviceInfo>({
        osName: 'desktop',
    });

    useEffect(() => {
        const md = new mobileDetect(window.navigator.userAgent);
        const os = md.os();

        const osMapping: { [key: string]: TDeviceInfo } = {
            iOS: { osName: 'iOS' },
            AndroidOS: { osName: 'AndroidOS' },
        };

        const defaultInfo = { osName: 'desktop' };

        const { osName } = osMapping[os] || defaultInfo;

        setDeviceInfo({ osName });
    }, []);

    return deviceInfo;
};
