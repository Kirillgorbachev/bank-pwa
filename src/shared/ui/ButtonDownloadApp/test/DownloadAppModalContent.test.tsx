import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { DownloadAppModalContent } from '@/shared/ui/ButtonDownloadApp/ui/ContentBtnModal/DownloadAppModalContent';

import '@testing-library/jest-dom';

describe('DownloadAppModalContent', () => {
    beforeAll(() => {
        window.matchMedia = vi.fn().mockImplementation((query) => ({
            matches: query === '(max-width: 480px)',
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
        }));
    });

    it('рендерит заголовок и контент правильно', () => {
        render(<DownloadAppModalContent />);

        expect(screen.getByText('Скачать приложение на телефон')).toBeInTheDocument();

        expect(screen.getByText(/Cкачайте наше приложение/u)).toBeInTheDocument();
    });

    it('скроллит страницу в начало при монтировании компонента', () => {
        vi.spyOn(window, 'scrollTo');
        render(<DownloadAppModalContent />);

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
});
