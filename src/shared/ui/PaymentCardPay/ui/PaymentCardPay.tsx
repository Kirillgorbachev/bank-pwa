import { SoonAppearPage } from '@/shared/ui/SoonAppearPage/ui/SoonAppearPage';

import cls from './PaymentCardPay.module.scss';

import { PayCardQrModal } from '@/feature/payCardQrModal';
import { CardComponent } from '@/shared/ui/ButtonComponent/ui/CardComponent';
import { Indicator } from '@/shared/ui/PaymentCardPay/Indicator/Indicator';
import { paymentCardPay } from '@/shared/ui/PaymentCardPay/ui/PayCard';
import { executeModalAction } from '@/shared/ui/PaymentCardPay/utils/executeModalAction';
import { useTransferModals } from '@/shared/ui/PaymentCardPay/utils/useTransferModals';

interface IPaymentCardPayProps {
    currentPage: number;
    totalPages: number;
}

export const PaymentCardPay = ({ currentPage, totalPages }: IPaymentCardPayProps) => {
    const { modalActions, modals } = useTransferModals();

    return (
        <div>
            <div className={cls.cardContainer}>
                {paymentCardPay.map((card) => (
                    <CardComponent
                        key={card.id}
                        icon={card.icon}
                        text={card.text}
                        className={cls.cardComponent}
                        iconClassName={cls.cardIcon}
                        textClassName={cls.cardText}
                        onClick={() => executeModalAction(card.id, modalActions)}
                    />
                ))}
            </div>
            <Indicator currentPage={currentPage} totalPages={totalPages} />
            {Object.entries(modals).map(([key, modal]) => {
                if (key === 'payCardQrModal') {
                    return <PayCardQrModal key={key} isModalOpen={modal.isOpen} closeModal={modal.closeModal} />;
                } else {
                    return <SoonAppearPage key={key} isModalOpen={modal.isOpen} closeModal={modal.closeModal} />;
                }
            })}
        </div>
    );
};
