import './AddGoals.scss';

import { AddButton } from '@/shared/ui/AddButton';

export const AddGoals = () => (
    <div className="goals-block">
        <div className="add-goals-container">
            <AddButton />
            <p className="goals-p">Добавить цель</p>
        </div>
    </div>
);
