import cls from './PaymentOption.module.scss';

interface IPaymentOption {
    label: string;
    logo: React.ReactNode;
    selected: boolean;
    onClick: () => void;
}

export const PaymentOption = ({ label, logo, selected, onClick }: IPaymentOption) => (
    <div key={label} className={`${cls.option} ${selected ? cls.selected : ''}`} onClick={() => onClick()}>
        <span className={cls.logo}>{logo}</span>
        <span className={cls.label}>{label}</span>
    </div>
);
