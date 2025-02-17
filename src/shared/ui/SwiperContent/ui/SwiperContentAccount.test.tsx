import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import type { ICard } from '@/entities/Card/model/CardsSlice';
import { CardsContent } from '@/shared/ui/CardsContent';
import { SwiperContentAccount } from '@/shared/ui/SwiperContent';

vi.mock('@/shared/ui/CardsContent', () => ({
    CardsContent: vi.fn(() => <div>CardsContent Mock</div>),
}));

vi.mock('@/shared/ui/AccountsTopContent', () => ({
    AccountsTopContent: vi.fn(() => <div>AccountsTopContent Mock</div>),
}));

describe('SwiperContentAccount', () => {
    it('renders the component and its children correctly', () => {
        const items: ICard[] = [
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
        render(<SwiperContentAccount items={items} />);

        expect(document.querySelector('.content-container')).toBeInTheDocument();

        expect(screen.getByText('AccountsTopContent Mock')).toBeInTheDocument();

        expect(screen.getByText('CardsContent Mock')).toBeInTheDocument();

        expect(CardsContent).toHaveBeenCalledWith(
            expect.objectContaining({
                items,
                isPasswordVisible: false,
            }),
            expect.anything(),
        );
    });
});
