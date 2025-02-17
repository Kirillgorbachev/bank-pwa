import { toast } from 'react-toastify';

import type { TCoordinates } from '@/feature/geolocation/types/typesGeo';

export const getGeolocation = (
    setCoordinates: (coords: TCoordinates) => void,
    setDenied: (denied: boolean) => void,
): void => {
    if (!('geolocation' in navigator)) {
        toast.error('Ваш браузер не поддерживает геолокацию');

        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
            setCoordinates({ latitude, longitude });
        },
        (error: GeolocationPositionError) => {
            console.error('Ошибка при получении геолокации:', error);

            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error('Пользователь отклонил запрос на геолокацию');
                    setDenied(true);
                    break;
                case error.POSITION_UNAVAILABLE:
                    toast.error('Информация о местоположении недоступна');
                    break;
                case error.TIMEOUT:
                    toast.error('Время ожидания запроса на получение информации о местоположении пользователя истекло');
                    break;
                default:
                    toast.error('Произошла неизвестная ошибка');
                    break;
            }
        },
    );
};
