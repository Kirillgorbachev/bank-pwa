import cls from './PaymentCardTransfers.module.scss';

import { CardComponent } from '@/shared/ui/ButtonComponent/ui/CardComponent';
import { executeModalAction } from '@/shared/ui/PaymentCardPay/utils/executeModalAction';
import { paymentCardTransfers } from '@/shared/ui/PaymentCardTransfers/ui/CardTransfers';
import { ModalForms } from '@/shared/ui/PaymentCardTransfers/ui/ModalForms';
import { useTransferModals } from '@/shared/ui/PaymentCardTransfers/utils/useTransferModals';

export const PaymentCardTransfers = () => {
    const { modalActions, modals } = useTransferModals();

    return (
        <div>
            <h4 className={cls.paymentTitle}>Переводы</h4>
            <div className={cls.cardContainer}>
                {paymentCardTransfers.map(({ id, icon, text }) => (
                    <CardComponent
                        className={cls.cardComponent}
                        key={id}
                        icon={icon}
                        text={text}
                        onClick={() => executeModalAction(id, modalActions)}
                    />
                ))}
            </div>
            <ModalForms modals={modals} />
        </div>
    );
};
