export const formatTime = (time: number | null) => {
    if (time === null) return 'Не доступно';

    return time === Infinity ? 'Неизвестно' : `${Math.max(time / 60, 0).toFixed(0)} мин.`;
};
