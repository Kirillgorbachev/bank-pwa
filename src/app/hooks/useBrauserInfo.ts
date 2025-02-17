import { useEffect, useState } from 'react';

import { BrowserNameEnum, detectBrowser } from '../utils/detectBrowser';

export const useBrowserInfo = (): BrowserNameEnum => {
    const [browserInfo, setBrowserInfo] = useState<BrowserNameEnum>(BrowserNameEnum.Unknown);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const detectedBrowser = detectBrowser(userAgent);
        setBrowserInfo(detectedBrowser);
    }, []);

    return browserInfo;
};
