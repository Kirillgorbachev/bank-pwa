export const IconDocumentKeys = {
    INSURANCE_NUMBER: 'insuranceNumber',
    MEDICAL_INSURANCE: 'medicalInsurance',
    PASSPORT: 'passport',
} as const;

export type TIconDocumentsKey = (typeof IconDocumentKeys)[keyof typeof IconDocumentKeys];
