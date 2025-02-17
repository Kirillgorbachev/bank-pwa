export const labelKeys = {
    MASTERCARD: 'MastercardLogo',
    VISA: 'VisaLogo',
    MIR: 'MirLogo',
} as const;

export type TLabelKey = (typeof labelKeys)[keyof typeof labelKeys];
