export const validatePasswordLength = (passwordProp: string, minLength: number): string | null =>
    passwordProp.length < minLength ? `Пароль должен содержать минимум ${minLength} символов` : null;
