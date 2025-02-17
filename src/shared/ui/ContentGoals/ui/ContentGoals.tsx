import './ContentGoals.scss';

import { formatNumber } from '@/app/utils/formatNumber';
import { render } from '@/app/utils/render';
import { CarIcon } from '@/shared/assets/icons/CarIcon';
import { Repair } from '@/shared/assets/icons/Repair';
import { VacationIcon } from '@/shared/assets/icons/VacationIcon';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import type { IInfoGoals } from '@/shared/ui/SwiperGoals/ui/SwiperGoals';

type TGoalsType = 'Vacation' | 'Repair' | 'Car';

const iconType: Record<TGoalsType, JSX.Element> = {
    Vacation: <VacationIcon />,
    Repair: <Repair />,
    Car: <CarIcon />,
};

const textType: Record<TGoalsType, string> = {
    Vacation: 'Отпуск',
    Repair: 'Ремонт',
    Car: 'Машина',
};

export const ContentGoals = ({ goals }: IInfoGoals) => (
    <>
        {goals.map((goalItem) => (
            <div className="goals-block" key={goalItem.id}>
                <div className="goals-block-top">
                    {render(iconType, goalItem.object, undefined)}
                    <div className="goals-block-top-right">
                        <span className="goals-span">{goalItem.goalStatus}%</span>
                        <ProgressBar goalStatus={goalItem.goalStatus} />
                    </div>
                </div>
                <h3 className="goals-h3">{formatNumber(goalItem.total)} ₽</h3>
                <p className="goals-p">{render(textType, goalItem.object, goalItem.object)}</p>
            </div>
        ))}
    </>
);
