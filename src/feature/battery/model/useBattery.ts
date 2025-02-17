import { useEffect, useState } from 'react';

import type { IBatteryInfo, IBatteryManager, INavigatorWithBattery } from '../types/types';

export const useBattery = (): IBatteryInfo => {
    const [batteryInfo, setBatteryInfo] = useState<IBatteryInfo>({
        level: null,
        charging: null,
        chargingTime: null,
        dischargingTime: null,
    });

    useEffect(() => {
        let batteryManager: IBatteryManager | null = null;

        const updateBatteryInfo = (battery: IBatteryManager) => {
            setBatteryInfo({
                dischargingTime: battery.dischargingTime,
                level: battery.level,
                charging: battery.charging,
                chargingTime: battery.chargingTime,
            });
        };

        const handleBatteryChange = () => {
            if (batteryManager) {
                updateBatteryInfo(batteryManager);
            }
        };

        const initBatteryAPI = async () => {
            const navigatorWithBattery = navigator as INavigatorWithBattery;

            if (navigatorWithBattery.getBattery) {
                batteryManager = await navigatorWithBattery.getBattery();
                updateBatteryInfo(batteryManager);

                batteryManager.addEventListener('levelchange', handleBatteryChange);
                batteryManager.addEventListener('chargingchange', handleBatteryChange);
                batteryManager.addEventListener('chargingtimechange', handleBatteryChange);
                batteryManager.addEventListener('dischargingtimechange', handleBatteryChange);
            }
        };

        initBatteryAPI();

        // Очистка подписок
        return () => {
            if (batteryManager) {
                batteryManager.removeEventListener('levelchange', handleBatteryChange);
                batteryManager.removeEventListener('chargingchange', handleBatteryChange);
                batteryManager.removeEventListener('chargingtimechange', handleBatteryChange);
                batteryManager.removeEventListener('dischargingtimechange', handleBatteryChange);
            }
        };
    }, []);

    return batteryInfo;
};
