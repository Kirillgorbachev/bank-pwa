import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import { hexToRgba } from '@/app/utils/hexToRgba';

const mockedLine = vi.fn();
vi.mock('some-library', () => ({
    Line: mockedLine,
}));

describe('ProgressBar Component', () => {
    it('converts hex color to rgba correctly', () => {
        expect(hexToRgba('#FA193B', 0.2)).toBe('rgba(250, 25, 59, 0.2)');
        expect(hexToRgba('#F7931A', 0.5)).toBe('rgba(247, 147, 26, 0.5)');
        expect(hexToRgba('#00BD90', 1)).toBe('rgba(0, 189, 144, 1)');
    });
});
