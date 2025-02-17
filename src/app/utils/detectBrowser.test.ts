import { describe, expect, test } from 'vitest';

import { BrowserNameEnum, detectBrowser } from './detectBrowser';

describe('detectBrowser', () => {
    test('проверка если Chrome ', () => {
        const userAgent =
            'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36';
        expect(detectBrowser(userAgent)).toBe(BrowserNameEnum.Chrome);
    });

    test('проверка если Safari ', () => {
        const userAgent =
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15';
        expect(detectBrowser(userAgent)).toBe(BrowserNameEnum.Safari);
    });

    test('проверка если Firefox ', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0';
        expect(detectBrowser(userAgent)).toBe(BrowserNameEnum.Firefox);
    });

    test('проверка если Edge ', () => {
        const userAgent =
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.100.0';
        expect(detectBrowser(userAgent)).toBe(BrowserNameEnum.Edge);
    });

    test('проверка если Yandex ', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 YaBrowser/21.3.1.101';
        expect(detectBrowser(userAgent)).toBe(BrowserNameEnum.Yandex);
    });

    test('проверка если другой браузер ', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko';
        expect(detectBrowser(userAgent)).toBe(BrowserNameEnum.Unknown);
    });
});
