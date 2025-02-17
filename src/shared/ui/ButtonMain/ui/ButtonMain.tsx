import cls from './ButtonMain.module.scss';

interface IButtonMainProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const ButtonMain = ({
    title,
    isActive = false,
    onClick,
    type = 'button',
    disabled = false,
}: IButtonMainProps) => (
    <button
        className={`${cls.button_main} ${isActive ? cls.active : ''}${disabled ? cls.disabled : ''}`}
        onClick={onClick}
        disabled={!isActive || disabled}
        type={type}>
        {title}
    </button>
);
