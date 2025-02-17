import { useState } from 'react';
import { toast } from 'react-toastify';

import { useAppSelector } from '@/app/hooks/useAppSelector';

import { CardDesignShow } from '../../CardDesign';
import { CardRadioComponent } from '../../CardRadioComponent';
import { DebitCardItem } from '../../DebitCardItem';
import type { IDebitCardItemProps } from '../../DebitCardItem/ui/DebitCardItem';

import styles from './CardIssue.module.scss';

import { useCreateCardMutation } from '@/entities/Card/api/CardsApi';
import { TooltipIcon } from '@/shared/assets/icons/TooltipIcon';
import type { TLabelKey } from '@/shared/ui/CardIssue/const/labelKeys';
import { generateCardNumber, mapLabel } from '@/shared/ui/CardIssue/utils/utils';
import { ModalFooter } from '@/widgets/ModalFooter/ui/ModalFooter';
import type { TPaymentLogoKey } from '@/widgets/PaymentSystemContainer/const/logoKeys';
import { PaymentSystemContainer } from '@/widgets/PaymentSystemContainer/ui/PaymentSystemContainer';
import { mapLogo } from '@/widgets/PaymentSystemContainer/utils/logoMapper';

export const CardIssue = ({ card }: IDebitCardItemProps) => {
    const [createCard] = useCreateCardMutation();
    const [selectedPaymentSystem, setSelectedPaymentSystem] = useState<TPaymentLogoKey>('MastercardLogo');

    const userName = useAppSelector((state) => state.user.data?.name);
    const cardNumber = generateCardNumber();

    const confirmCreating = async () => {
        if (!selectedPaymentSystem) {
            toast.error('Пожалуйста, выберите платежную систему');

            return;
        }

        try {
            const newCard = {
                value: selectedPaymentSystem,
                label: `${mapLabel(selectedPaymentSystem as TLabelKey)} •• ${cardNumber}`,
                icon: selectedPaymentSystem,
                balance: 0,
                points: 0,
            };

            await createCard(newCard).unwrap();
            toast.success('Карта успешно создана!');
        } catch (error) {
            toast.error('Ошибка при создании карты');
            console.error('Ошибка при создании карты:', error);
        }
    };

    return (
        <div className={styles.cardIssue}>
            <div className={styles.cardItem}>
                <DebitCardItem card={card} />
                <div className={styles.tooltip}>
                    <TooltipIcon />
                    <span className={styles.tooltiptext}>Информация для карты</span>
                </div>
            </div>
            <CardRadioComponent />
            <PaymentSystemContainer selected={selectedPaymentSystem} onSelect={setSelectedPaymentSystem} />
            <CardDesignShow name={userName} logo={selectedPaymentSystem ? mapLogo(selectedPaymentSystem) : null} />
            <ModalFooter price={card.maintenanceFee} buttonText="Продолжить" onButtonClick={confirmCreating} />
        </div>
    );
};
