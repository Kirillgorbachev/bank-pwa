import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { usePhoneInputFeature } from './usePhoneInputFeature';

import { BrowserNameEnum } from '@/app/utils/detectBrowser';

vi.mock('./useReadContacts', () => ({
    useReadContacts: vi.fn(() => ({ isAvailable: true })),
}));

vi.mock('@/app/hooks/useDeviceOS', () => ({
    useDeviceOS: vi.fn(() => ({ osName: 'iOS' })),
}));

vi.mock('@/app/hooks/useBrauserInfo', () => ({
    useBrowserInfo: vi.fn(() => BrowserNameEnum.Safari),
}));

describe('usePhoneInputFeature', () => {
    test('должен показывать контакты при IOS и Safari', async () => {
        const { result } = renderHook(() => usePhoneInputFeature());

        result.current.handleInputClick();

        await waitFor(() => {
            expect(result.current.showContact).toBe(true);
            expect(result.current.isInstructionVisible).toBe(false);
        });
    });
});
