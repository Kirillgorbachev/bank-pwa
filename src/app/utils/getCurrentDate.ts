export const getCurrentDate = (): string => {
    const now = new Date();

    return now.toISOString().split('T')[0];
};

export const formatDateForDisplay = (date: string): string => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const parsedDate = new Date(date);

    return (
        {
            [today.toDateString()]: 'Сегодня',
            [yesterday.toDateString()]: 'Вчера',
        }[parsedDate.toDateString()] ||
        parsedDate.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    );
};
