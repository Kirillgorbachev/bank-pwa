import cls from './PWAFeaturesPage.module.scss';

import { BatteryStatus } from '@/feature/battery/ui/BatteryStatus';
import { DeviceMemoryInfo } from '@/feature/deviceMemory/ui/DeviceMemoryInfo';
import { GeolocationComponent } from '@/feature/geolocation/ui/GeolocationComponent';
import { NetworkInfo } from '@/feature/network-info/ui/NetworkInfo';
import { NetworkStatus } from '@/feature/networkStatus/ui/NetworkStatus';
import { VibrateButton } from '@/feature/vibration/ui/VibrateButton';

const PWAFeaturesPage = () => (
    <div className={cls.container}>
        <GeolocationComponent />
        <VibrateButton />
        <BatteryStatus />
        <NetworkInfo />
        <DeviceMemoryInfo />
        <NetworkStatus />
    </div>
);

export default PWAFeaturesPage;
