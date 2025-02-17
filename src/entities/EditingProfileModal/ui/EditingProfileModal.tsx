import { EditingProfile } from './EditingProfile';

import { Modal } from '@/shared/ui/Modal';

interface IEditingProfileModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const EditingProfileModal = ({ isOpen, closeModal }: IEditingProfileModalProps) => (
    <Modal isModalOpen={isOpen} closeModal={closeModal} modalStyleType="long">
        <EditingProfile closeModal={closeModal} />
    </Modal>
);
