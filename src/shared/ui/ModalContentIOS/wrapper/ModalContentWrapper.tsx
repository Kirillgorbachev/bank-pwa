import { cloneElement } from 'react';

import { useShowModalOnLogin } from '@/app/hooks/useShowModalOnLogin';
import { Modal } from '@/shared/ui/Modal/ui/Modal';

interface IModalContentProps {
    content: JSX.Element;
    modalStyleType: 'short' | 'long';
}

export const ModalContent = ({ content, modalStyleType }: IModalContentProps) => {
    const { isModalOpen, closeModal } = useShowModalOnLogin();

    return (
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType={modalStyleType}>
            {cloneElement(content, { onClick: closeModal })}
        </Modal>
    );
};
