export enum BrowserNameEnum {
    Chrome = 'Chrome',
    Safari = 'Safari',
    Firefox = 'Firefox',
    Edge = 'Edge',
    Yandex = 'Yandex',
    Unknown = 'Unknown',
}

export const detectBrowser = (userAgent: string): BrowserNameEnum => {
    const browserRules = [
        { name: BrowserNameEnum.Chrome, include: /Chrome/u, exclude: [/Edg/u, /OPR/u, /YaBrowser/u] },
        { name: BrowserNameEnum.Safari, include: /Safari/u, exclude: [/Chrome/u] },
        { name: BrowserNameEnum.Firefox, include: /Firefox/u },
        { name: BrowserNameEnum.Edge, include: /Edg/u },
        { name: BrowserNameEnum.Yandex, include: /YaBrowser/u },
    ];

    for (const { name, include, exclude = [] } of browserRules) {
        if (include.test(userAgent) && !exclude.some((re) => re.test(userAgent))) {
            return name;
        }
    }

    return BrowserNameEnum.Unknown;
};
