import { useEffect, useState } from 'react';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';

import cls from './PhoneTransferForm.module.scss';

import { useGetCardsQuery } from '@/entities/Card/api/CardsApi';
import type { TIconCardsKey } from '@/entities/Card/const/cardsKeys';
import { performPhoneTransfer, setAmount, setError, setFromCard } from '@/feature/cardTransfer/model/TransferSlice';
import { mapIcon } from '@/feature/cardTransfer/utils/iconMapper';
import { PhoneTransferFormContent } from '@/feature/phoneTransfer/ui/FormContent/PhoneTransferFormContent';
import { AmountRegex, NumericRegex, PhoneRegex } from '@/shared/const/regex/regex';
import { Modal } from '@/shared/ui/Modal';

interface IModalTransferProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

export const PhoneTransferForm = ({ isModalOpen, closeModal }: IModalTransferProps) => {
    const { data: cardOptions = [], isLoading, isError: isCardsError } = useGetCardsQuery();
    const dispatch = useAppDispatch();
    const { fromCard, amount, error, isTransferring } = useAppSelector((state) => state.transfer);

    const [recipientPhone, setRecipientPhone] = useState('');

    // Установка карты списания по умолчанию
    useEffect(() => {
        if (cardOptions.length > 0) {
            dispatch(setFromCard(cardOptions[0].value));
        }
    }, [cardOptions, dispatch]);

    const handleCardChange = (newCard: string) => {
        dispatch(setFromCard(newCard));
        dispatch(setError(''));
    };

    const handleAmountChange = (newAmount: string) => {
        const validAmount = newAmount.replace(AmountRegex, '');
        dispatch(setAmount(validAmount));
        dispatch(setError(''));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        const validPhone = input.replace(PhoneRegex, '');

        const numericPhone = validPhone.replace(NumericRegex, '');

        if (numericPhone.length > 11) {
            return;
        }

        setRecipientPhone(validPhone);
        dispatch(setError(''));
    };

    const handlePhoneSelect = (selectedPhone: string) => {
        setRecipientPhone(selectedPhone);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const fromCardObj = cardOptions.find((card) => card.value === fromCard);

        dispatch(
            performPhoneTransfer({
                fromCardObject: fromCardObj,
                phoneNumber: recipientPhone,
                transferedAmount: amount,
            }),
        );

        setRecipientPhone('');
    };

    const renderLoadingError = () => {
        if (isLoading) return <p className={cls.loading}>Загрузка карт...</p>;
        if (isCardsError) return <p className={cls.error}>Ошибка при загрузке карт</p>;

        return null;
    };

    const cardOptionsFormatted = cardOptions.map((card) => ({
        value: card.value,
        label: card.label,
        balance: card.balance,
        icon: mapIcon(card.icon as TIconCardsKey),
    }));

    return (
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType="long">
            <h2 className={cls.title}>По номеру телефона</h2>
            <div className={cls.container}>
                {renderLoadingError()}
                {!isLoading && !isCardsError && (
                    <PhoneTransferFormContent
                        cardOptionsFormatted={cardOptionsFormatted}
                        fromCard={fromCard}
                        handleCardChange={handleCardChange}
                        recipientPhone={recipientPhone}
                        handlePhoneChange={handlePhoneChange}
                        handelPhoneSelect={handlePhoneSelect}
                        amount={amount}
                        handleAmountChange={handleAmountChange}
                        error={error}
                        isTransferring={isTransferring}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>
        </Modal>
    );
};
