import { useState } from 'react';

import { useModal } from '@/app/hooks/useModal';

export const useCardActions = () => {
    const { isOpen: isCardModalOpen, openModal: openCardModal, closeModal: closeCardModal } = useModal();
    const { isOpen: isSoonAppearOpen, openModal: openSoonAppearModal, closeModal: closeSoonAppearModal } = useModal();
    const [currentCardId, setCurrentCardId] = useState<string>('');
    const [modalStyleType, setModalStyleType] = useState<'short' | 'long' | 'default'>('default');

    const modalActions: Record<string, () => void> = {
        debCard: () => {
            setCurrentCardId('debCard');
            openCardModal();
        },
        creditCard: openSoonAppearModal,
        score: openSoonAppearModal,
    };

    const closeCard = () => {
        closeCardModal();
        setModalStyleType('default');
    };

    const onContentClick = () => {
        setModalStyleType('long');
    };

    return {
        isCardModalOpen,
        openCardModal,
        closeCard,
        currentCardId,
        modalStyleType,
        setCurrentCardId,
        setModalStyleType,
        modalActions,
        isSoonAppearOpen,
        closeSoonAppearModal,
        onContentClick,
    };
};
