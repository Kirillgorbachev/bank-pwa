import { SoonAppearPage } from '@/shared/ui/SoonAppearPage/ui/SoonAppearPage';

import cls from './PaymentBtnPayServices.module.scss';

import { ButtonComponent } from '@/shared/ui/PaymentBtnPayServices/ComponentButton/ButtonComponent';
import { paymentCardSevices } from '@/shared/ui/PaymentBtnPayServices/ui/PayServices';
import { useServiceModals } from '@/shared/ui/PaymentBtnPayServices/utils/useServiceModals';

export const PaymentBtnPayServices = () => {
    const { modalActions, modals } = useServiceModals();

    return (
        <div>
            <h4 className={cls.paymentTitle}>Оплата</h4>
            <div className={cls.paymentContainer}>
                <div className={cls.buttonContainer}>
                    {paymentCardSevices.map(({ id, icon, text }) => (
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
