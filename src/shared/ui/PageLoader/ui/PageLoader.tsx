import cn from 'classnames';

import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => <div className={cn(cls.PageLoader, {}, [className])} />;
