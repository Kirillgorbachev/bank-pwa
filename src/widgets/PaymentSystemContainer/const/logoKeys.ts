export const PaymentLogoKeys = {
    MASTERCARD: 'MastercardLogo',
    VISA: 'VisaLogo',
    MIR: 'MirLogo',
} as const;

export type TPaymentLogoKey = (typeof PaymentLogoKeys)[keyof typeof PaymentLogoKeys];
