import cls from './AmountInput.module.scss';

interface IAmountInputProps {
    amount: string;
    setAmount: (value: string) => void;
    errorMessage?: string;
}

export const AmountInput = ({ amount, setAmount, errorMessage }: IAmountInputProps) => (
    <div className={cls.inputContainer}>
        <input
            type="text"
            placeholder="Сумма от 0,01 ₽ до 1 000 000 ₽"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={cls.input}
        />
        <span className={errorMessage !== '' ? cls.error : cls.hint}>
            {errorMessage !== '' ? errorMessage : 'Комиссия будет рассчитана после указания суммы'}
        </span>
    </div>
);
