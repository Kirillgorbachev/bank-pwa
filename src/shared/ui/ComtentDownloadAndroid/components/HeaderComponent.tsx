import cls from '../ui/ContentDownloadAndroid.module.scss';

interface IHeaderProps {
    title: string;
    icon: React.ReactNode;
}

export const HeaderComponent = ({ title, icon }: IHeaderProps) => (
    <div className={cls.androidContainer}>
        {icon}
        <p className={cls.androidText}>{title}</p>
    </div>
);
