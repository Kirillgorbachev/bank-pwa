import './SwiperGoals.scss';

import { AddGoals } from '@/shared/ui/AddGoals';
import { ContentGoals } from '@/shared/ui/ContentGoals';
import type { IGoals } from '@/shared/ui/SwiperContent/ui/InfoItems';

export interface IInfoGoals {
    goals: IGoals[];
}

export const SwiperGoals = ({ goals }: IInfoGoals) => (
    <div className="goals-container">
        <ContentGoals goals={goals} />
        <AddGoals />
    </div>
);
