import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';

import { useLoginQuery, useRegisterWebAuthnMutation } from '../api/AuthApi';
import { clearError } from '../model/AuthSlice';

import { MIN_PASSWORD_LENGTH } from '@/feature/auth/const/const';
import {
    createPublicKeyOptions,
    createPublicKeyRequestOptions,
    extractCredentialData,
    findUserByCredentialId,
    findUserByPassword,
    handleAuthFailure,
    handleAuthSuccess,
    sendWebAuthnDataToServer,
} from '@/feature/auth/utils/authUtils';
import { validatePasswordLength } from '@/feature/auth/utils/validationUtils';

export const useAuthForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data: users = [], isLoading } = useLoginQuery();
    const [registerWebAuthn] = useRegisterWebAuthnMutation();

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);

        if (error) {
            setError('');
            dispatch(clearError());
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = validatePasswordLength(password, MIN_PASSWORD_LENGTH);

        if (validationError) {
            handleAuthFailure(setError, validationError);

            return;
        }

        const user = findUserByPassword(users, password);

        if (user) {
            handleAuthSuccess(user, dispatch, navigate);
            setPassword('');
        } else {
            handleAuthFailure(setError, 'Неверный пароль');
        }
    };

    const handleFaceIdAuth = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Создание параметров для аутентификации
            const publicKey = createPublicKeyRequestOptions(users);

            // Вызов WebAuthn API
            const credential = (await navigator.credentials.get({ publicKey })) as PublicKeyCredential;

            if (credential) {
                const user = findUserByCredentialId(credential.rawId, users);

                if (user) {
                    handleAuthSuccess(user, dispatch, navigate);
                } else {
                    handleAuthFailure(setError, 'Пользователь не найден. Проверьте данные аутентификации.');
                }
            } else {
                handleAuthFailure(setError, 'Не удалось пройти аутентификацию через Face ID/Touch ID');
            }
        } catch (err) {
            console.error('Ошибка Face ID/Touch ID', err);
            handleAuthFailure(setError, 'Не удалось пройти аутентификацию через Face ID/Touch ID');
        }
    };

    const handleRegister = async (userId: number) => {
        try {
            // Создание параметров для регистрации
            const publicKey = createPublicKeyOptions(userId);

            // Запрос данных WebAuthn
            const credential = (await navigator.credentials.create({ publicKey })) as PublicKeyCredential;

            if (credential) {
                // Извлечение данных
                const { webauthnIdString, publicKeyString } = extractCredentialData(credential);

                // Отправка на сервер
                await sendWebAuthnDataToServer(userId, webauthnIdString, publicKeyString, registerWebAuthn);
            }
        } catch (err) {
            console.error('Ошибка при регистрации WebAuthn:', err);
        }
    };

    return {
        password,
        error,
        isLoading,
        handleInputChange,
        handleSubmit,
        handleFaceIdAuth,
        handleRegister,
    };
};
