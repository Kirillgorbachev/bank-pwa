import type { IBatteryInfo } from '@/feature/battery/types/types';
import { formatTime } from '@/feature/battery/utils/utils';

export const BatteryDetails = ({ level, charging, chargingTime, dischargingTime }: IBatteryInfo) => {
    const batteryLevel = level !== null ? Math.round(level * 100) : null;

    return (
        <>
            <p>Уровень заряда: {batteryLevel}%</p>
            <p>Зарядка: {charging ? 'Да' : 'Нет'}</p>
            <p>Время до полной зарядки: {formatTime(chargingTime)}</p>
            <p>Время до разрядки: {formatTime(dischargingTime)}</p>
        </>
    );
};
