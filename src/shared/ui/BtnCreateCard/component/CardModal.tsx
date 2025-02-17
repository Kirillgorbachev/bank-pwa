import { Modal } from '@/shared/ui/Modal';

export const CardModal = ({
    isOpen,
    content,
    closeModal,
    onContentClick,
    modalStyleType,
}: {
    isOpen: boolean;
    content: React.ReactNode;
    closeModal: () => void;
    onContentClick: () => void;
    modalStyleType: 'short' | 'long' | 'default';
}) => (
    <Modal isModalOpen={isOpen} closeModal={closeModal} modalStyleType={modalStyleType}>
        <div onClick={onContentClick}>{content}</div>
    </Modal>
);
