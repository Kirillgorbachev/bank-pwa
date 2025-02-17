import { IconArrow } from '@/shared/ui/ButtonDownloadApp/icons/icon-arrow';

import cls from './ArrowNavigation.module.scss';

interface IArrowButtonProps {
    isDisabled: boolean;
    direction: 'left' | 'right';
    onClick: () => void;
}

export const ArrowButton = ({ isDisabled, direction, onClick }: IArrowButtonProps) => (
    <div
        className={`${cls.paymentPage_circle} ${direction === 'left' ? cls.paymentPage_circleLeft : cls.paymentPage_circleRight} ${
            isDisabled ? cls.disabledArrow : ''
        }`}
        onClick={!isDisabled ? onClick : undefined}>
        <IconArrow
            className={`${cls.paymentPage_arrow} ${
                direction === 'left' ? cls.paymentPage_arrowLeft : cls.paymentPage_arrowRight
            }`}
        />
    </div>
);
