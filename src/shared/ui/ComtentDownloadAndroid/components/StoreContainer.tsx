import cls from '../ui/ContentDownloadAndroid.module.scss';

interface IStoreContainerProps {
    icon: React.ReactNode;
    className?: string;
}

export const StoreContainer = ({ icon }: IStoreContainerProps) => <div className={cls.storeContainer}>{icon}</div>;
