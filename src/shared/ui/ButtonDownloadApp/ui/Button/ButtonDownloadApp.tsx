import { useState } from 'react';

import { DownloadButton } from '@/shared/ui/ButtonDownloadApp/ui/Button/DownloadButton';
import { DownloadAppModalContent } from '@/shared/ui/ButtonDownloadApp/ui/ContentBtnModal/DownloadAppModalContent';

import { Modal } from '@/shared/ui/Modal/ui/Modal';

export const ButtonDownloadApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <DownloadButton onClick={openModal} />
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                <DownloadAppModalContent />
            </Modal>
        </>
    );
};
