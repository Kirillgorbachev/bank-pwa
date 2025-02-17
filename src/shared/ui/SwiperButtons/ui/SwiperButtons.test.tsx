import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import { SwiperButtons } from './SwiperButtons';

describe('SwiperButtons Component', () => {
    const items = [
        { id: 0, name: 'Slide 1' },
        { id: 1, name: 'Slide 2' },
        { id: 2, name: 'Slide 3' },
    ];
    const mockGoToSlide = vi.fn();

    it('renders all buttons with correct names', () => {
        render(<SwiperButtons items={items} activeIndex={1} goToSlide={mockGoToSlide} />);

        // Проверяем, что все кнопки рендерятся
        items.forEach((item) => {
            expect(screen.getByText(item.name)).toBeInTheDocument();
        });
    });

    it('applies "active" class to the correct button', () => {
        render(<SwiperButtons items={items} activeIndex={1} goToSlide={mockGoToSlide} />);

        // Проверяем, что только вторая кнопка имеет класс "active"
        const activeButton = screen.getByText('Slide 2');
        expect(activeButton).toHaveClass('active');

        const inactiveButtons = items.filter((item) => item.id !== 1).map((item) => screen.getByText(item.name));
        inactiveButtons.forEach((button) => {
            expect(button).not.toHaveClass('active');
        });
    });

    it('calls goToSlide with the correct index when a button is clicked', () => {
        render(<SwiperButtons items={items} activeIndex={1} goToSlide={mockGoToSlide} />);

        // Кликаем по кнопке "Slide 3"
        const button = screen.getByText('Slide 3');
        fireEvent.click(button);

        // Проверяем, что goToSlide был вызван с id = 2
        expect(mockGoToSlide).toHaveBeenCalledWith(2);
        expect(mockGoToSlide).toHaveBeenCalledTimes(1);
    });
});
