import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DownloadButton } from '@/shared/ui/ButtonDownloadApp/ui/Button/DownloadButton';

import '@testing-library/jest-dom';

describe('DownloadButton', () => {
    it('рендерит кнопку правильно', () => {
        const { getByRole } = render(<DownloadButton onClick={() => {}} />);
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('вызывает onClick при клике', () => {
        const onClickMock = vi.fn();
        const { getByRole } = render(<DownloadButton onClick={onClickMock} />);
        const button = getByRole('button');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
