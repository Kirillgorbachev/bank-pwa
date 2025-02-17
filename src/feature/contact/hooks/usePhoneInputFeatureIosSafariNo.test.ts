import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { usePhoneInputFeature } from './usePhoneInputFeature';

import { BrowserNameEnum } from '@/app/utils/detectBrowser';

vi.mock('./useReadContacts', () => ({
    useReadContacts: vi.fn(() => ({ isAvailable: false })),
}));

vi.mock('@/app/hooks/useDeviceOS', () => ({
    useDeviceOS: vi.fn(() => ({ osName: 'iOS' })),
}));

vi.mock('@/app/hooks/useBrauserInfo', () => ({
    useBrowserInfo: vi.fn(() => BrowserNameEnum.Safari),
}));

describe('usePhoneInputFeature', () => {
    test('не должен показывать контакты при не активированом API на IOS с Safari', async () => {
        const { result } = renderHook(() => usePhoneInputFeature());

        result.current.handleInputClick();

        await waitFor(() => {
            expect(result.current.showContact).toBe(false);
            expect(result.current.isInstructionVisible).toBe(true);
        });
    });
});
