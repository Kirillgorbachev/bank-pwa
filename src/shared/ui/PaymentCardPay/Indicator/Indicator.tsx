import cls from './Indicator.module.scss';

interface IIndicatorProps {
    currentPage: number;
    totalPages: number;
}

export const Indicator = ({ currentPage, totalPages }: IIndicatorProps) => {
    const indicators = Array.from({ length: totalPages }, (_, index) => ({
        id: `indicator-${index}`,
        isActive: currentPage === index,
    }));

    return (
        <div className={cls.indicatorContainer}>
            {indicators.map((indicator) => (
                <span
                    key={indicator.id}
                    className={`${cls.indicator} ${indicator.isActive ? cls.activeIndicator : cls.inactiveIndicator}`}
                />
            ))}
        </div>
    );
};
