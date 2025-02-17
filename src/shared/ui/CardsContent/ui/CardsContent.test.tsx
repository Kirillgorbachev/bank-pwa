import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';

import { formatNumber } from '@/app/utils/formatNumber';
import { parseCard } from '@/app/utils/parseCard';

describe('CardsContent', () => {
    it('parses a valid card label correctly', () => {
        const label = 'Mastercard •• 6009';
        const result = parseCard(label);

        expect(result).toEqual({
            leftPart: 'Mastercard',
            rightPart: '6009',
        });
    });

    it('throws an error for an invalid card label format', () => {
        const invalidLabel = 'InvalidFormat';
        expect(() => parseCard(invalidLabel)).toThrowError('Некорректный формат данных');
    });

    it('handles edge cases with multiple spaces or dots', () => {
        const labelWithSpaces = 'Visa   ••    1234';
        const labelWithDots = 'Visa Classic ••••• 9876';

        expect(parseCard(labelWithSpaces)).toEqual({
            leftPart: 'Visa',
            rightPart: '1234',
        });

        expect(parseCard(labelWithDots)).toEqual({
            leftPart: 'Visa Classic',
            rightPart: '9876',
        });
    });

    it('formats numbers correctly with spaces for thousands', () => {
        expect(formatNumber(1234567)).toBe('1 234 567');
        expect(formatNumber('890123')).toBe('890 123');
    });
});
