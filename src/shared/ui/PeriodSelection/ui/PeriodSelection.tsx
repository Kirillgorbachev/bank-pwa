import { useEffect } from 'react';
import moment from 'moment';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';

import { BorderSelection } from '../../borderSelection';
import { Button } from '../../Button';
import { Days } from '../../Days';
import { TitleComponent } from '../../Title';
import { VerticalSlider } from '../../VerticalSlider';

import cls from './PeriodSelection.module.scss';

import { Calendar } from '@/entities/Calendar';
import { selectFirstDateId, setBorder, setFirstDateId, setLastDateId } from '@/entities/Calendar/model/CalendarSlice';
import { dateFormatString } from '@/shared/lib/dateUtils';

interface IPeriodSelectionProps {
    handlePeriodSelection: () => void;
}

export const PeriodSelection = ({ handlePeriodSelection }: IPeriodSelectionProps) => {
    const dispatch = useAppDispatch();

    const currentMonthId = moment().set('date', 1).format(dateFormatString);
    const firstDateId = useAppSelector(selectFirstDateId);

    useEffect(() => {
        dispatch(setBorder('start'));
        dispatch(setFirstDateId(''));
        dispatch(setLastDateId(''));
    }, [dispatch]);

    const onClick = () => {
        handlePeriodSelection();
    };

    return (
        <div className={cls.periodSelection}>
            <TitleComponent text="Выберите период" className={cls.title} />
            <BorderSelection />
            <Days />
            <VerticalSlider topElementId={currentMonthId}>
                <Calendar />
            </VerticalSlider>
            {firstDateId && <Button title="Продолжить" className={cls.button} onClick={onClick} />}
        </div>
    );
};
