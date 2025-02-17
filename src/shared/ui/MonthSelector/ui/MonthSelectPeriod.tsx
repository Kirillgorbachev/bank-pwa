import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/app/hooks/useAppSelector';

import { MonthSelectPeriodDisplay } from './MonthSelectPeriodDisplay';

import styles from './MonthSelector.module.scss';

import {
    selectFirstDateId,
    selectLastDateId,
    setFirstDateId,
    setLastDateId,
} from '@/entities/Calendar/model/CalendarSlice';
import { CalendarIcon } from '@/shared/assets/icons/CalendarIcon';

interface IMonthSelectPeriod {
    onClick: () => void;
}

export const MonthSelectPeriod = ({ onClick }: IMonthSelectPeriod) => {
    const dispatch = useDispatch();
    const selectedPeriodFirst = useAppSelector(selectFirstDateId);
    const selectedPeriodLast = useAppSelector(selectLastDateId);
    const [backgroundActive, setBackgroundActive] = useState(Boolean(selectedPeriodFirst));

    const handleOnClick = () => {
        if (backgroundActive) {
            dispatch(setFirstDateId(''));
            dispatch(setLastDateId(''));
            setBackgroundActive(false);
        } else {
            onClick();
            setBackgroundActive(true);
        }
    };

    return (
        <div className={styles.backgroundActive}>
            <div onClick={handleOnClick}>
                <CalendarIcon />
            </div>
            {backgroundActive && selectedPeriodFirst && (
                <MonthSelectPeriodDisplay
                    selectedPeriodFirst={selectedPeriodFirst}
                    selectedPeriodLast={selectedPeriodLast}
                    onClick={handleOnClick}
                />
            )}
        </div>
    );
};
