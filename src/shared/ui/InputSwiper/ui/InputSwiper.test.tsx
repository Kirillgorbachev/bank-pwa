import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import { InputSwiper } from '@/shared/ui/InputSwiper';

describe('InputSwiper', () => {
    const mockTogglePasswordVisibility = vi.fn();

    it('calls togglePasswordVisibility when ToggleEye is clicked', () => {
        render(
            <InputSwiper
                total="1000"
                isPasswordVisible={false}
                togglePasswordVisibility={mockTogglePasswordVisibility}
            />,
        );

        const toggleEyeButton = screen.getByRole('button');
        fireEvent.click(toggleEyeButton);

        expect(mockTogglePasswordVisibility).toHaveBeenCalledTimes(1);
    });
});
