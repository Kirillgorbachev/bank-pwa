import { SoonAppearIcon } from '@/shared/ui/SoonAppearPage/icon/soon-appear-icon';

import cls from './SoonAppearPage.module.scss';

import { Modal } from '@/shared/ui/Modal';

interface ISoonAppearPageProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

export const SoonAppearPage = ({ isModalOpen, closeModal }: ISoonAppearPageProps) => (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType="long">
        <div className={cls.content}>
            <span className={cls.icon}>
                <SoonAppearIcon />
            </span>
            <h4 className={cls.title}>Страница скоро появится</h4>
            <p className={cls.description}>Сейчас она находится в разработке</p>
        </div>
    </Modal>
);
