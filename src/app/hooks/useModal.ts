import { useCallback, useState } from 'react';

// Типизация возвращаемого значения хука
interface IUseModal {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useModal = (): IUseModal => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    return {
        isOpen,
        openModal,
        closeModal,
    };
};
