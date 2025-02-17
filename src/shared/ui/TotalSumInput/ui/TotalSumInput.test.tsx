import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import * as useFlexibleInputHook from '@/app/hooks/useFlexibleInput';
import { TotalSumInput } from '@/shared/ui/TotalSumInput/ui/TotalSumInput';

describe('TotalSumInput', () => {
    const mockUseFlexibleInput = {
        content: '1 000',
        width: 100,
        changeHandler: vi.fn(),
        spanRef: { current: null },
    };

    beforeEach(() => {
        vi.spyOn(useFlexibleInputHook, 'useFlexibleInput').mockReturnValue(mockUseFlexibleInput);
    });

    it('renders correctly with given props', () => {
        render(<TotalSumInput total="1000" isPasswordVisible={false} />);

        const span = screen.getByText('1 000');
        expect(span).toBeInTheDocument();

        const input = screen.getByDisplayValue('1 000 ₽');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveStyle({ width: '100px' });
    });

    it('renders input as password when isPasswordVisible is true', () => {
        render(<TotalSumInput total="1000" isPasswordVisible />);

        const input = screen.getByDisplayValue('1 000 ₽');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'password');
    });
});
