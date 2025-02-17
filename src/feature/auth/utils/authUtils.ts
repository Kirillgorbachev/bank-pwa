import type { NavigateFunction } from 'react-router-dom';

import type { TAppDispatch } from '@/app/store';
import { setUserData } from '@/entities/user/model/UserSlice';
import type { IUser } from '@/feature/auth/api/AuthApi';
import { setLogin } from '@/feature/auth/model/AuthSlice';

export const findUserByPassword = (usersProp: IUser[], passwordProp: string) =>
    usersProp.find((u) => u.password === passwordProp);

// Создание параметров для WebAuthn API
export const createPublicKeyRequestOptions = (usersProp: IUser[]) =>
    ({
        challenge: crypto.getRandomValues(new Uint8Array(32)),
        allowCredentials: usersProp.map((user) => ({
            type: 'public-key',
            id: new Uint8Array(user.webauthnId.split('').map((c) => c.charCodeAt(0))),
        })),
        timeout: 60000,
        userVerification: 'preferred',
    }) as PublicKeyCredentialRequestOptions;

// Создание параметров PublicKeyCredentialCreationOptions
export const createPublicKeyOptions = (userId: number): PublicKeyCredentialCreationOptions => ({
    challenge: crypto.getRandomValues(new Uint8Array(32)),
    rp: { name: 'Example App' },
    user: {
        id: new Uint8Array(16),
        name: `user${userId}@example.com`,
        displayName: `User ${userId}`,
    },
    pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
    authenticatorSelection: {
        userVerification: 'preferred',
    },
});

// Извлечение данных из PublicKeyCredential
export const extractCredentialData = (credential: PublicKeyCredential) => {
    const webauthnId = new Uint8Array(credential.rawId);
    const authResponse = credential.response as AuthenticatorAttestationResponse;

    const publicKeyTwo = authResponse.getPublicKey();

    if (!publicKeyTwo) {
        throw new Error('Public key is null or undefined.');
    }

    const webauthnIdString = Array.from(webauthnId)
        .map((byte) => String.fromCharCode(byte))
        .join('');
    const publicKeyString = btoa(String.fromCharCode(...new Uint8Array(publicKeyTwo)));

    return { webauthnIdString, publicKeyString };
};

// Отправка данных на сервер
export const sendWebAuthnDataToServer = async (
    userId: number,
    webauthnIdString: string,
    publicKeyString: string,
    registerWebAuthn: Function,
) => {
    await registerWebAuthn({
        id: userId,
        webauthnId: webauthnIdString,
        publicKey: publicKeyString,
    });
    console.log('WebAuthn зарегистрирован успешно!');
};

// Поиск пользователя по идентификатору
export const findUserByCredentialId = (credentialId: ArrayBuffer, usersProp: IUser[]) =>
    usersProp.find(
        (u) =>
            new Uint8Array(u.webauthnId.split('').map((c) => c.charCodeAt(0))).toString() ===
            new Uint8Array(credentialId).toString(),
    );

export const handleAuthSuccess = (user: IUser, dispatchProp: TAppDispatch, navigateProp: NavigateFunction) => {
    dispatchProp(setLogin({ accessToken: user.accessToken, refreshToken: user.refreshToken }));
    dispatchProp(setUserData({ id: user.id, name: user.name }));
    navigateProp('/');
};

export const handleAuthFailure = (setErrorProp: (msg: string) => void, msg: string) => {
    setErrorProp(msg);
};
