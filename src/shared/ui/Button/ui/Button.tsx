import classNames from 'classnames';

import cls from './Button.module.scss';

interface IButtonProps {
    title: string;
    className?: string;
    onClick: () => void;
}

export const Button = ({ title, className, onClick }: IButtonProps) => (
    <button className={classNames(cls.button, className)} onClick={onClick}>
        {title}
    </button>
);
