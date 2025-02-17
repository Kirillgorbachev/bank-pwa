import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import * as useModalHook from '@/app/hooks/useModal';
import { AddButton } from '@/shared/ui/AddButton';

vi.mock('./useModal', () => ({
    useModal: vi.fn(),
}));

describe('AddButton', () => {
    beforeAll(() => {
        vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    });

    it('renders correctly with the button and modal', () => {
        const mockOpenModal = vi.fn();
        const mockCloseModal = vi.fn();

        vi.spyOn(useModalHook, 'useModal').mockReturnValue({
            isOpen: false,
            openModal: mockOpenModal,
            closeModal: mockCloseModal,
        });

        render(<AddButton />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        expect(mockOpenModal).not.toHaveBeenCalled();
    });
});
