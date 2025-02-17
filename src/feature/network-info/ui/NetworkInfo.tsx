import { useNetworkInfo } from '../model/useNetworkInfo';

import cls from './NetworkInfo.module.scss';

import { NetworkDetails } from '@/feature/network-info/ui/NetworkDetails';

export const NetworkInfo = () => {
    const networkInfo = useNetworkInfo();

    let content;

    switch (true) {
        case !networkInfo:
            content = <p className={cls.error}>Информация о сети недоступна</p>;
            break;

        default:
            content = <NetworkDetails networkInfo={networkInfo} />;
            break;
    }

    return (
        <div className={cls.container}>
            <h3 className={cls.title}>Информация о сети</h3>
            {content}
        </div>
    );
};
