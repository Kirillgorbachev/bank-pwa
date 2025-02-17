import { AppIcon } from '@/shared/assets/icons/AppIcon';

import cls from './AuthForm.module.scss';

import { useAuthForm } from '@/feature/auth/hooks/useAuthForm';
import { EyeCloseIcon } from '@/shared/assets/icons/EyeCloseIcon';
import { EyeCloseIconError } from '@/shared/assets/icons/EyeCloseIconError';
import { EyeOpenIcon } from '@/shared/assets/icons/EyeOpenIcon';
import { EyeOpenIconError } from '@/shared/assets/icons/EyeOpenIconError';
import { FaceIdIcon } from '@/shared/assets/icons/FaceIdIcon';
import { ButtonMain } from '@/shared/ui/ButtonMain';
import { Input } from '@/shared/ui/Input';

export const AuthForm = () => {
    const { password, error, isLoading, handleInputChange, handleSubmit, handleFaceIdAuth, handleRegister } =
        useAuthForm();

    return (
        <div className={cls.container}>
            <form onSubmit={handleSubmit} className={cls.form}>
                <span className={cls.icon}>
                    <AppIcon />
                </span>
                <h2 className={cls.title}>Добрый день!</h2>
                <p className={`${cls.subtitle} ${cls.subtitleDesktop}`}>
                    Введите пароль от аккаунта или зайдите через Touch ID
                </p>
                <p className={`${cls.subtitle} ${cls.subtitleMobile}`}>
                    Введите пароль от аккаунта или зайдите через Face ID/Touch ID
                </p>

                <Input
                    value={password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Введите пароль"
                    openIcon={<EyeOpenIcon />}
                    errorOpenIcon={<EyeOpenIconError />}
                    closeIcon={<EyeCloseIcon />}
                    errorCloseIcon={<EyeCloseIconError />}
                    hasError={!!error}
                />
                {error && (
                    <div id="error" className={cls.error}>
                        {error}
                    </div>
                )}
                {password === '' && (
                    <p id="hint" className={`${cls.hint} ${cls.hintDesktop}`}>
                        Введите любые символы чтобы войти
                    </p>
                )}
                <div className={cls.button}>
                    <ButtonMain
                        title={isLoading ? 'Загрузка...' : 'Войти'}
                        isActive={password !== '' && !isLoading}
                        type="submit"
                        disabled={isLoading}
                    />
                </div>
                <div id="iconContainer" className={cls.iconContainer}>
                    <FaceIdIcon />
                    <p className={cls.iconText} onClick={handleFaceIdAuth}>
                        Face ID или Touch ID
                    </p>
                </div>
            </form>
            <button onClick={() => handleRegister(1)} className={cls.registerButton}>
                Register biometric
            </button>
        </div>
    );
};
