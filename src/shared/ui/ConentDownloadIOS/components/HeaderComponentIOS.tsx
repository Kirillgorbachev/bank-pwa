import cls from '../ui/ContentDownloadIOS.module.scss';

interface IHeaderProps {
    title: string;
    icon: React.ReactNode;
}

export const HeaderComponentIOS = ({ title, icon }: IHeaderProps) => (
    <div className={cls.iosContainer}>
        {icon}
        <p className={cls.iosText}>{title}</p>
    </div>
);
