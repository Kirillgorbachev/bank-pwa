import { monthName } from '../const/month/month';

export const isToday = (date: Date, today = new Date()): boolean =>
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

export const getDayName = (dayIndex: number): string => {
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    return days[dayIndex] || 'Неизвестный день';
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error('Некорректная дата');
    }

    const today = new Date();

    if (isToday(date, today)) {
        return 'Сегодня';
    }

    const day = date.getDate();
    const month = monthName[date.getMonth()];
    const dayOfWeek = getDayName(date.getDay());

    return `${day} ${month}, ${dayOfWeek}`;
};

export const formatStringDate = (dateString: string) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error('Некорректная дата');
    }

    return date.toLocaleDateString('ru-RU');
};

export const getNoTransactionMessage = (selectedType: string, nameMonth: string) =>
    selectedType === 'wastes' ? `Трат ${nameMonth} не было` : `Зачислений ${nameMonth} не было`;
