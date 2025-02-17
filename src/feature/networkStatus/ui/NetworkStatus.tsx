import { useOnlineState } from '../model/useOnlineState';

import cls from './NetworkStatus.module.scss';

export const NetworkStatus = () => {
    const isOnline = useOnlineState();

    return <div className={isOnline ? cls.online : cls.offline}>{isOnline ? 'You are Online' : 'You are Offline'}</div>;
};
