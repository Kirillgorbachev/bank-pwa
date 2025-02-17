import { type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalComponent } from './ModalComponent';

interface IModalProps {
    isModalOpen: boolean;
    isShortMobileModal?: boolean;
    closeModal: () => void;
    modalStyleType?: 'short' | 'long' | 'default';
}

export const Modal = ({
    isModalOpen,
    isShortMobileModal = true,
    closeModal,
    children,
    modalStyleType = 'default',
}: PropsWithChildren<IModalProps>) => {
    useEffect(() => {
        document.body.style.overflowY = isModalOpen ? 'hidden' : 'auto';
    }, [isModalOpen]);

    return isModalOpen
        ? createPortal(
              <ModalComponent
                  isShortMobileModal={isShortMobileModal}
                  closeModal={closeModal}
                  modalStyleType={modalStyleType}>
                  {children}
              </ModalComponent>,
              document.body,
          )
        : null;
};
