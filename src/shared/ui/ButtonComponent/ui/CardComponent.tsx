import cn from 'classnames';

import cls from './CardComponent.module.scss';

interface ICardComponentProps {
    icon: React.ReactNode;
    text: React.ReactNode;
    className?: string;
    iconClassName?: string;
    textClassName?: string;
    width?: string;
    height?: string;
    padding?: string;
    iconMarginBottom?: string;
    textStyle?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const CardComponent = ({
    icon,
    text,
    className,
    iconClassName,
    textClassName,
    width,
    height,
    padding,
    iconMarginBottom,
    onClick,
}: ICardComponentProps) => (
    <div className={cn(cls.card, className)} style={{ width, height, padding }} onClick={onClick}>
        <div className={cls.cardContent}>
            <div className={cn(cls.cardIcon, iconClassName)} style={{ marginBottom: iconMarginBottom }}>
                {icon}
            </div>
            <p className={cn(cls.cardText, textClassName)}>{text}</p>
        </div>
    </div>
);
