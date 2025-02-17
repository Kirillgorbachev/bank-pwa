import { useEffect, useState } from 'react';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';

import { payQrCode, selectedAmount, selectedCard, selectIsTransferring, setAmount } from '../model/payQrCodeSlice';

import cls from './PayCardQrModal.module.scss';

import { useGetCardsQuery } from '@/entities/Card/api/CardsApi';
import type { ICard } from '@/entities/Card/model/CardsSlice';
import { formatCardOptions } from '@/feature/cardTransfer/utils/formatCardOptions';
import { QrReader } from '@/feature/qrReader/ui/QrReader';
import { ButtonMain } from '@/shared/ui/ButtonMain';
import { CardSelect } from '@/shared/ui/CardSelect/CardSelect';
import { LoadingError } from '@/shared/ui/LoadingError';
import { Modal } from '@/shared/ui/Modal';
import { TitleComponent } from '@/shared/ui/Title';

interface IPayCardQrModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
}

export const PayCardQrModal = ({ isModalOpen, closeModal }: IPayCardQrModalProps) => {
    const dispatch = useAppDispatch();
    const amount = useAppSelector(selectedAmount);
    const defaultCard = useAppSelector(selectedCard);
    const isTransferring = useAppSelector(selectIsTransferring);

    const { data: cardOptions = [], isLoading, isError: isCardsError } = useGetCardsQuery();

    const cardOptionsFormatted = formatCardOptions(cardOptions);

    const [currentCard, setCurrentCard] = useState<string>(defaultCard);
    const [alreadyPaid, setAlreadyPaid] = useState<boolean>(false);

    useEffect(() => {
        if (!isModalOpen) {
            dispatch(setAmount(0));
            setAlreadyPaid(false);
        }
    }, [dispatch, isModalOpen]);

    const onChangeCard = (card: string) => {
        setCurrentCard(card);
    };

    const handleSubmit = async () => {
        const cardObj = cardOptions.find((card) => card.value === currentCard);
        dispatch(
            payQrCode({
                selectedCardObject: cardObj as ICard,
                amount,
            }),
        );

        if (!isTransferring) {
            setAlreadyPaid(true);
        }
    };

    return (
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType="long">
            {amount ? (
                <div>
                    <TitleComponent text={`${amount} руб.`} className={cls.title} />
                    <LoadingError objectName="карт" isLoading={isLoading} isError={isCardsError} />
                    {!isLoading && !isCardsError && (
                        <CardSelect
                            label="Оплатить"
                            options={cardOptionsFormatted}
                            selected={currentCard}
                            onChange={onChangeCard}
                        />
                    )}
                    {alreadyPaid && !isTransferring ? (
                        <p className={cls.title}>Оплачено</p>
                    ) : (
                        <ButtonMain
                            title="Оплатить"
                            isActive
                            onClick={handleSubmit}
                            type="submit"
                            disabled={!currentCard || isTransferring}
                        />
                    )}
                </div>
            ) : (
                <div className={cls.payCardQr}>
                    <QrReader />
                </div>
            )}
        </Modal>
    );
};
