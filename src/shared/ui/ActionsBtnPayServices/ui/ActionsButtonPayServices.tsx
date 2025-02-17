import { SoonAppearPage } from '@/shared/ui/SoonAppearPage/ui/SoonAppearPage';

import cls from './ActionsBtnPayServices.module.scss';

import { actionsCardSevices } from '@/shared/ui/ActionsBtnPayServices/ui/ActionServices';
import { ButtonComponent } from '@/shared/ui/PaymentBtnPayServices/ComponentButton/ButtonComponent';
import { useServiceModals } from '@/shared/ui/PaymentBtnPayServices/utils/useServiceModals';

export const ActionsBtnPayServices = () => {
    const { modalActions, modals } = useServiceModals();

    return (
        <div className={cls.mobileOnly}>
            <h4 className={cls.actionTitle}>Действия</h4>
            <div className={cls.actionContainer}>
                <div className={cls.buttonContainer}>
                    {actionsCardSevices.map(({ id, icon, text }) => (
                        <ButtonComponent key={id} id={id} text={text} icon={icon} modalActions={modalActions} />
                    ))}
                </div>
            </div>
            {Object.entries(modals).map(([key, modal]) => (
                <SoonAppearPage key={key} isModalOpen={modal.isOpen} closeModal={modal.closeModal} />
            ))}
        </div>
    );
};
