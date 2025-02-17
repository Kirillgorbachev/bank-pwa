import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';

import { borderEndObject, borderStartObject } from '../const/const';
import type { IBorderObject } from '../types/types';

import cls from './BorderSelection.module.scss';

import type { TBorder } from '@/entities/Calendar/model/CalendarSlice';
import { selectBorder, selectFirstDateId, selectLastDateId, setBorder } from '@/entities/Calendar/model/CalendarSlice';
import { formatStringDate } from '@/shared/lib/formatDate';

export const BorderSelection = () => {
    const dispatch = useAppDispatch();

    const border = useAppSelector(selectBorder);
    const firstDateId = useAppSelector(selectFirstDateId);
    const lastDateId = useAppSelector(selectLastDateId);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        dispatch(setBorder(value as TBorder));
    };

    const borderArray: IBorderObject[] = [
        { ...borderStartObject, dateId: firstDateId },
        { ...borderEndObject, dateId: lastDateId },
    ];

    return (
        <form className={cls.borderSelection}>
            {borderArray.map((item) => (
                <label htmlFor="start" className={cls.label} key={item.id}>
                    <input
                        type="radio"
                        name="period"
                        className={cls.input}
                        id={item.id}
                        value={item.id}
                        checked={border === item.id}
                        onChange={onChange}
                    />
                    <div className={cls.column}>
                        <p className={cls.text}>{item.label}</p>
                        {item.dateId && <p className={cls.text}>{formatStringDate(item.dateId)}</p>}
                    </div>
                </label>
            ))}
        </form>
    );
};
