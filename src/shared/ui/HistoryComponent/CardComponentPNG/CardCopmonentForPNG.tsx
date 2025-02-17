import cn from 'classnames';

import cls from './CardComponentPNG.module.scss';

interface ICardComponentProps {
    icon: string;
    text: React.ReactNode;
    className?: string;
    width?: string;
}

export const CardComponentPNG = ({ icon, text, className, width }: ICardComponentProps) => (
    <div className={cn(cls.card, className)} style={{ width }}>
        <div className={cls['card-content']}>
            <img src={icon} alt="Card Icon" className={cls['card-icon']} />
            <p className={cls['card-text']}>{text}</p>
        </div>
    </div>
);
