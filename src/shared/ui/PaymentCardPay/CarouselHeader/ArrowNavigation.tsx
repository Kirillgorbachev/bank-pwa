import { ArrowButton } from './ArrowButton';

import cls from './ArrowNavigation.module.scss';

interface IArrowNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
    currentPage: number;
    totalPages: number;
}

export const ArrowNavigation = ({ onPrevious, onNext, currentPage, totalPages }: IArrowNavigationProps) => {
    const isAtFirstPage = currentPage === 0;
    const isAtLastPage = currentPage === totalPages - 1;

    return (
        <div className={cls.paymentPage}>
            <div className={cls.paymentPage_arrows}>
                <ArrowButton isDisabled={isAtFirstPage} direction="left" onClick={onPrevious} />
                <ArrowButton isDisabled={isAtLastPage} direction="right" onClick={onNext} />
            </div>
        </div>
    );
};
