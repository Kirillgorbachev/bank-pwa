import cls from './PriceInfo.module.scss';

interface IPriceInfoProps {
    price: number;
}

export const PriceInfo = ({ price }: IPriceInfoProps) => (
    <div className={cls.priceInfo}>
        <span className={cls.label}>Стоимость, в месяц</span>
        <span className={cls.price}>{price} ₽</span>
    </div>
);
