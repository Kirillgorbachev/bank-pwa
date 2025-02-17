import type { ReactNode } from 'react';

import cls from './ButtonComponent.module.scss';

interface IButtonProps {
    id: string;
    text: string;
    icon: ReactNode;
    modalActions: Record<string, () => void>;
}

export const ButtonComponent = ({ id, text, icon, modalActions }: IButtonProps) => {
    const handleClick = () => {
        const action = modalActions[id];
        if (action) action();
    };

    return (
        <button className={cls.buttonContainer} onClick={handleClick}>
            <div className={cls.appIcon}>{icon}</div>
            <p className={cls.buttonText}>{text}</p>
        </button>
    );
};
