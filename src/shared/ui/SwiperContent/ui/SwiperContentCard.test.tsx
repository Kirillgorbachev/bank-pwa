import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import * as useHideInputHook from '@/app/hooks/useHideInput';
import type { ICard } from '@/entities/Card/model/CardsSlice';
import { SwiperContentCard } from '@/shared/ui/SwiperContent';

vi.mock('./useHideInput', () => ({
    useHideInput: vi.fn(),
}));

describe('SwiperContentCard', () => {
    const mockItems: ICard[] = [
        {
            id: 1,
            value: 'Mastercard',
            label: 'Mastercard •• 6009',
            balance: '200',
            points: 10,
            icon: <div />,
            phoneNumber: '123',
        },
        {
            id: 2,
            value: 'Visa',
            label: 'Visa Classic •• 3467',
            balance: '2324',
            points: 20,
            icon: <div />,
            phoneNumber: '456',
        },
    ];

    vi.spyOn(useHideInputHook, 'useHideInput').mockReturnValue({
        isPasswordVisible: false,
        togglePasswordVisibility: vi.fn(),
    });

    it('renders the correct totals, passes props to children', () => {
        render(<SwiperContentCard items={mockItems} />);

        const topContentTotal = document.querySelector('.top-content-left');
        expect(topContentTotal).toBeInTheDocument();
        expect(topContentTotal).toHaveTextContent('2 524');

        const topContentPoints = document.querySelector('.total-points');
        expect(topContentPoints).toBeInTheDocument();
        expect(topContentPoints).toHaveTextContent('30');
    });
});
