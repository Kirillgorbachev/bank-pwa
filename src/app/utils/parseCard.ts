import { CardLabelRegex } from '@/shared/const/regex/regex';

type TCardParts = {
    leftPart: string;
    rightPart: string;
};

export const parseCard = (card: string): TCardParts => {
    const match = card.match(CardLabelRegex);

    if (match) {
        return {
            leftPart: match[1].trim(),
            rightPart: match[2].trim(),
        };
    }

    throw new Error('Некорректный формат данных');
};
