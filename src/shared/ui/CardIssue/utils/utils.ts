import type { TLabelKey } from '@/shared/ui/CardIssue/const/labelKeys';
import { labelKeys } from '@/shared/ui/CardIssue/const/labelKeys';

export const generateCardNumber = () => Math.floor(1000 + Math.random() * 9000);

const labelMapper: Record<TLabelKey, string> = {
    [labelKeys.MASTERCARD]: 'MasterCard',
    [labelKeys.VISA]: 'Visa',
    [labelKeys.MIR]: 'МИР',
};

export const mapLabel = (labelKey: TLabelKey): string => labelMapper[labelKey] || '';
