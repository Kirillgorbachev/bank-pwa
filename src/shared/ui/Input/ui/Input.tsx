import { useState } from 'react';

import cls from './Input.module.scss';

import { ToggleEye } from '@/shared/ui/ToggleEye';

interface IInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password' | 'email' | 'number' | string;
    placeholder?: string;
    openIcon?: React.ReactNode;
    errorOpenIcon?: React.ReactNode;
    closeIcon?: React.ReactNode;
    errorCloseIcon?: React.ReactNode;
    hasError?: boolean;
}

export const Input = ({
    value,
    onChange,
    type = 'text',
    placeholder,
    openIcon,
    errorOpenIcon,
    closeIcon,
    errorCloseIcon,
    hasError = false,
}: IInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={cls.inputContainer}>
            <ToggleEye
                openIcon={hasError ? errorOpenIcon : openIcon}
                closeIcon={hasError ? errorCloseIcon : closeIcon}
                eyeIcon={isPasswordVisible}
                onToggle={togglePasswordVisibility}
                isVisible={value !== ''}
            />
            <input
                className={`${cls.input} ${hasError ? cls.error : ''}`}
                type={isPasswordVisible ? 'text' : type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
