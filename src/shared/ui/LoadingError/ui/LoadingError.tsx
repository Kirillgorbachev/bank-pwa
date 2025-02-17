import cls from './LoadingError.module.scss';

interface ILoadingErrorProps {
    objectName: string;
    isLoading: boolean;
    isError: boolean;
}

export const LoadingError = ({ objectName, isLoading, isError }: ILoadingErrorProps) => {
    if (isLoading) return <p className={cls.loading}>Загрузка {objectName}...</p>;
    if (isError) return <p className={cls.error}>Ошибка при загрузке {objectName}</p>;

    return null;
};
