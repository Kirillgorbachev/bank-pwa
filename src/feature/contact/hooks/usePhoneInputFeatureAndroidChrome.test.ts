import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { usePhoneInputFeature } from './usePhoneInputFeature';

import { BrowserNameEnum } from '@/app/utils/detectBrowser';

vi.mock('./useReadContacts', () => ({
    useReadContacts: vi.fn(() => ({ isAvailable: true })),
}));

vi.mock('@/app/hooks/useDeviceOS', () => ({
    useDeviceOS: vi.fn(() => ({ osName: 'AndroidOS' })),
}));

vi.mock('@/app/hooks/useBrauserInfo', () => ({
    useBrowserInfo: vi.fn(() => BrowserNameEnum.Chrome),
}));

describe('usePhoneInputFeature', () => {
    test('должен показывать контакты при Android и Chrome', async () => {
        const { result } = renderHook(() => usePhoneInputFeature());

        result.current.handleInputClick();
        await waitFor(() => {
            expect(result.current.showContact).toBe(true);
        });
    });
});
