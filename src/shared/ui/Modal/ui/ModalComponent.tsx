import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { CloseModalButton } from '../../CloseModalButton';

import cls from './ModalComponent.module.scss';

interface IModalComponentProps {
    isShortMobileModal: boolean;
    closeModal: () => void;
    modalStyleType?: 'short' | 'long' | 'default';
}

export const ModalComponent = ({
    isShortMobileModal,
    closeModal,
    children,
    modalStyleType = 'default',
}: PropsWithChildren<IModalComponentProps>) => (
    <div className={cls.modal}>
        <div className={cls.shadow} onClick={closeModal}></div>
        <div
            className={classNames(cls.modalContainer, {
                [cls.lowered]: isShortMobileModal,
                [cls.customTranslateShort]: modalStyleType === 'short',
                [cls.customTranslateLong]: modalStyleType === 'long',
            })}>
            <div className={cls.modalContent}>{children}</div>
            <CloseModalButton onClick={closeModal} />
        </div>
    </div>
);
