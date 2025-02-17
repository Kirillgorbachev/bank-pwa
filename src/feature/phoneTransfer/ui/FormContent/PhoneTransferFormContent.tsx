import cls from './PhoneTransferFormContent.module.scss';

import { AmountInput } from '@/shared/ui/AmountInput/AmountInput';
import { ButtonMain } from '@/shared/ui/ButtonMain';
import { CardSelect } from '@/shared/ui/CardSelect/CardSelect';
import { PhoneInputContainer } from '@/shared/ui/PhoneInput/PhoneInputContainer';

interface IPhoneTransferFormContentProps {
    cardOptionsFormatted: { value: string; label: string; balance: string; icon: React.ReactNode }[];
    fromCard: string;
    handleCardChange: (newCard: string) => void;
    recipientPhone: string;
    handlePhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handelPhoneSelect: (phoneNumber: string) => void;
    amount: string;
    handleAmountChange: (newAmount: string) => void;
    error: string | undefined;
    isTransferring: boolean;
    handleSubmit: (e: React.FormEvent) => void;
}

export const PhoneTransferFormContent = ({
    cardOptionsFormatted,
    fromCard,
    handleCardChange,
    recipientPhone,
    handlePhoneChange,
    handelPhoneSelect,
    amount,
    handleAmountChange,
    error,
    isTransferring,
    handleSubmit,
}: IPhoneTransferFormContentProps) => (
    <form className={cls.form} onSubmit={handleSubmit}>
        {/* Выбор карты списания */}
        <CardSelect label="Списать" options={cardOptionsFormatted} selected={fromCard} onChange={handleCardChange} />

        {/* Ввод номера телефона */}
        <PhoneInputContainer
            phone={recipientPhone}
            onPhoneChange={handlePhoneChange}
            onPhoneSelect={handelPhoneSelect}
        />

        {/* Ввод суммы */}
        <AmountInput amount={amount} setAmount={handleAmountChange} errorMessage={error} />

        {/* Кнопка отправки */}
        <div className={cls.button}>
            <ButtonMain
                title={isTransferring ? 'Выполняется...' : 'Перевести'}
                isActive
                type="submit"
                disabled={!amount || !recipientPhone || isTransferring}
            />
        </div>
    </form>
);
