import { useEffect } from 'react';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';

import { formatCardOptions } from '../utils/formatCardOptions';

import cls from './CardTransferForm.module.scss';

import { useGetCardsQuery } from '@/entities/Card/api/CardsApi';
import {
    performCardTransfer,
    setAmount,
    setError,
    setFromCard,
    setToCard,
} from '@/feature/cardTransfer/model/TransferSlice';
import { AmountRegex } from '@/shared/const/regex/regex';
import { AmountInput } from '@/shared/ui/AmountInput/AmountInput';
import { ButtonMain } from '@/shared/ui/ButtonMain';
import { CardSelect } from '@/shared/ui/CardSelect/CardSelect';
import { Modal } from '@/shared/ui/Modal';

interface IModalTransferProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

export const CardTransferForm = ({ isModalOpen, closeModal }: IModalTransferProps) => {
    const { data: cardOptions = [], isLoading, isError: isCardsError } = useGetCardsQuery();
    const dispatch = useAppDispatch();
    const { fromCard, toCard, amount, error, isTransferring } = useAppSelector((state) => state.transfer);

    useEffect(() => {
        if (cardOptions.length > 0) {
            dispatch(setFromCard(cardOptions[0].value));
            dispatch(setToCard(cardOptions[1] ? cardOptions[1].value : cardOptions[0].value));
        }
    }, [cardOptions, dispatch]);

    // Универсальная функция для изменения карты (отправитель или получатель)
    const handleCardChange = (newCard: string, type: 'from' | 'to') => {
        if (type === 'from' && newCard !== fromCard) {
            dispatch(setFromCard(newCard));
            dispatch(setToCard(fromCard));
        } else if (type === 'to' && newCard !== toCard) {
            dispatch(setToCard(newCard));
            dispatch(setFromCard(toCard));
        }

        dispatch(setError(''));
    };

    // Функция для обработки изменений суммы
    const handleAmountChange = (newAmount: string) => {
        const validAmount = newAmount.replace(AmountRegex, '');
        dispatch(setAmount(validAmount));
        dispatch(setError(''));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const fromCardObj = cardOptions.find((card) => card.value === fromCard);
        const toCardObj = cardOptions.find((card) => card.value === toCard);

        dispatch(
            performCardTransfer({
                fromCardObject: fromCardObj,
                toCardObject: toCardObj,
                transferedAmount: amount,
            }),
        );
    };

    // Универсальная обработка отображения состояния загрузки и ошибок
    const renderLoadingError = () => {
        if (isLoading) return <p className={cls.loading}>Загрузка карт...</p>;
        if (isCardsError) return <p className={cls.error}>Ошибка при загрузке карт</p>;

        return null;
    };

    // Функция для создания опций карт для CardSelect
    const cardOptionsFormatted = formatCardOptions(cardOptions);

    return (
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType="long">
            <h2 className={cls.title}>Между счетами</h2>
            <div className={cls.container}>
                {renderLoadingError()}
                {!isLoading && !isCardsError && (
                    <form className={cls.form} onSubmit={handleSubmit}>
                        <CardSelect
                            label="Списать"
                            options={cardOptionsFormatted}
                            selected={fromCard}
                            onChange={(newFromCard) => handleCardChange(newFromCard, 'from')}
                        />

                        <CardSelect
                            label="Перевести"
                            options={cardOptionsFormatted}
                            selected={toCard}
                            onChange={(newToCard) => handleCardChange(newToCard, 'to')}
                        />
                        <AmountInput amount={amount} setAmount={handleAmountChange} errorMessage={error} />
                        <div className={cls.button}>
                            <ButtonMain
                                title={isTransferring ? 'Выполняется...' : 'Перевести'}
                                isActive
                                type="submit"
                                disabled={!amount || isTransferring}
                            />
                        </div>
                    </form>
                )}
            </div>
        </Modal>
    );
};
