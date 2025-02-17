import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';

import { BannerMainBtn } from './BannerMainBtn';

import cls from './BannerMain.module.scss';

describe('BannerMainBtn', () => {
    it('должен отображать баннер, когда он видим', () => {
        render(<BannerMainBtn />);

        expect(screen.getByText('Защита карты')).toBeInTheDocument();
        expect(screen.getByText('Защитите карту при покупках онлайн')).toBeInTheDocument();
    });

    it('должен скрыть баннер, когда нажимают на кнопку закрытия', async () => {
        render(<BannerMainBtn />);

        const closeButton = screen.getByRole('button');

        fireEvent.click(closeButton);

        expect(screen.queryByText('Защита карты')).not.toBeInTheDocument();
        expect(screen.queryByText('Защитите карту при покупках онлайн')).not.toBeInTheDocument();
    });

    it('должен отображать изображения', () => {
        render(<BannerMainBtn />);

        const lineImage = screen.getByAltText('Line Image');
        const clockImage = screen.getByAltText('Clock Image');

        expect(lineImage).toBeInTheDocument();
        expect(clockImage).toBeInTheDocument();
    });

    it('должен применить правильный класс к кнопке закрытия', () => {
        render(<BannerMainBtn />);

        const closeButton = screen.getByRole('button');
        expect(closeButton).toHaveClass(cls.closeBtn);
    });

    it('не должен отображать баннер после закрытия', () => {
        const { rerender } = render(<BannerMainBtn />);

        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        rerender(<BannerMainBtn />);

        expect(screen.queryByText('Защита карты')).not.toBeInTheDocument();
        expect(screen.queryByText('Защитите карту')).not.toBeInTheDocument();
    });
});
