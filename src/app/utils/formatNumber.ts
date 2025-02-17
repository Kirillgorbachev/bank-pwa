import { SpacesRegex } from '@/shared/const/regex/regex';

export const formatNumber = (input: string | number): string => {
    const number = Number(input);

    return number.toLocaleString('ru-RU').replace(SpacesRegex, ' ');
};
