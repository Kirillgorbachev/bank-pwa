import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import { ContentGoals } from '@/shared/ui/ContentGoals';
import type { IGoals } from '@/shared/ui/SwiperContent/ui/InfoItems';

vi.mock('./ProgressBar', () => ({
    ProgressBar: vi.fn(({ goalStatus }) => <div className="progress-bar-mock" data-goal-status={goalStatus}></div>),
}));

describe('ContentGoals Component', () => {
    const mockGoals: IGoals[] = [
        {
            id: 1,
            total: '300000',
            object: 'Vacation',
            goalStatus: '82',
        },
        {
            id: 2,
            total: '50000',
            object: 'Repair',
            goalStatus: '56',
        },
    ];

    it('renders goals correctly using class selectors', () => {
        render(<ContentGoals goals={mockGoals} />);

        const goalBlocks = document.querySelectorAll('.goals-block');
        expect(goalBlocks).toHaveLength(2);

        const firstGoal = goalBlocks[0];
        expect(firstGoal.querySelector('.goals-span')).toHaveTextContent('82%');
        expect(firstGoal.querySelector('.goals-h3')).toHaveTextContent('300 000 ₽');
        expect(firstGoal.querySelector('.goals-p')).toHaveTextContent('Отпуск');

        const secondGoal = goalBlocks[1];
        expect(secondGoal.querySelector('.goals-span')).toHaveTextContent('56%');
        expect(secondGoal.querySelector('.goals-h3')).toHaveTextContent('50 000 ₽');
        expect(secondGoal.querySelector('.goals-p')).toHaveTextContent('Ремонт');
    });
});
