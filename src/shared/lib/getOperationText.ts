export const getOperationText = (number: number) => {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${number} операций`;
    } else if (lastDigit === 1) {
        return `${number} операция`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${number} операции`;
    } else {
        return `${number} операций`;
    }
};
