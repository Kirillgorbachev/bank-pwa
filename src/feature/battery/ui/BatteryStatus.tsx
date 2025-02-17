import { useBattery } from '../model/useBattery';

import cls from './BatteryStatus.module.scss';

import { BatteryDetails } from '@/feature/battery/ui/BatteryDetails';

export const BatteryStatus = () => {
    const { level, charging, chargingTime, dischargingTime } = useBattery();

    const batterySupported = 'getBattery' in navigator;

    let content;

    switch (true) {
        case !batterySupported:
            content = <p className={cls.error}>Ваш браузер не поддерживает Battery Status API.</p>;
            break;

        case level === null || charging === null:
            content = <p>Загрузка информации о батарее...</p>;
            break;

        default:
            content = (
                <BatteryDetails
                    level={level}
                    charging={charging}
                    chargingTime={chargingTime}
                    dischargingTime={dischargingTime}
                />
            );
            break;
    }

    return (
        <div className={cls.container}>
            <h3 className={cls.title}>Состояние батареи</h3>
            {content}
        </div>
    );
};
