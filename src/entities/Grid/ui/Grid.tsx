import { useEffect } from 'react';
import classNames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';

import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';

import cls from './Grid.module.scss';

import {
    selectBorder,
    selectFirstDateId,
    selectLastDateId,
    setBorder,
    setFirstDateId,
    setLastDateId,
} from '@/entities/Calendar/model/CalendarSlice';
import { dateFormatString } from '@/shared/lib/dateUtils';

interface IGridProps {
    data: Moment[];
}

const sundayIndex = 0;
const mondayIndex = 1;
const maxIndex = 6;

const getDateClassName = (date: Moment | null, firstDateId: string, lastDateId: string) => {
    const firstDateOfMonthDate = 1;
    const lastDateOfMonthDate = moment(date).endOf('month').date();

    const isBetween = date?.isBetween(firstDateId, lastDateId, 'date', '[]');
    const isFirstInRow =
        date?.day() === mondayIndex || date?.date() === firstDateOfMonthDate || date?.isSame(firstDateId);
    const isLastInRow = date?.day() === sundayIndex || date?.date() === lastDateOfMonthDate || date?.isSame(lastDateId);
    const isSelected = date?.isSame(firstDateId) || date?.isSame(lastDateId);

    return classNames(cls.cell, {
        [cls.between]: isBetween && !isFirstInRow && !isLastInRow,
        [cls.first]: isBetween && isFirstInRow,
        [cls.last]: isBetween && isLastInRow,
        [cls.selected]: isSelected,
    });
};

export const Grid = ({ data }: IGridProps) => {
    const firstDateDay = data[0].day();
    const previousMonthRest = new Array<null>(firstDateDay === sundayIndex ? maxIndex : firstDateDay - 1);
    const currentMonthWithPreviousMonthRestDta = [...previousMonthRest, ...data];

    const dispatch = useAppDispatch();

    const firstDateId = useAppSelector(selectFirstDateId);
    const lastDateId = useAppSelector(selectLastDateId);
    const border = useAppSelector(selectBorder);

    useEffect(() => {
        if (moment(firstDateId).isAfter(moment(lastDateId))) {
            const newLastDateId = firstDateId;
            dispatch(setFirstDateId(lastDateId));
            dispatch(setLastDateId(newLastDateId));
        }
    }, [dispatch, firstDateId, lastDateId]);

    const selectDate = (date: Moment | null) => {
        if (date) {
            if (border === 'start') {
                dispatch(setFirstDateId(date.format(dateFormatString)));
                dispatch(setBorder('end'));
            } else {
                dispatch(setLastDateId(date.format(dateFormatString)));
            }
        }
    };

    return (
        <div className={cls.grid}>
            {currentMonthWithPreviousMonthRestDta.map((date) => (
                <div
                    className={getDateClassName(date, firstDateId, lastDateId)}
                    onClick={() => selectDate(date)}
                    key={date ? date.format() : Math.random()}>
                    {date ? date.date() : null}
                </div>
            ))}
        </div>
    );
};
