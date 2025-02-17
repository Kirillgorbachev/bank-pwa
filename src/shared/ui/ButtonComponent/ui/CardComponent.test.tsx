import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';

import { CardComponent } from './CardComponent';

const defaultProps = {
    icon: <span data-testid="icon">Icon</span>,
    text: 'Card Text',
    className: 'custom-class',
    iconClassName: 'icon-class',
    textClassName: 'text-class',
    width: '200px',
    height: '150px',
    padding: '20px',
    iconMarginBottom: '10px',
    onClick: vi.fn(),
};

describe('CardComponent', () => {
    it('рендеринг без сбоев', () => {
        render(<CardComponent {...defaultProps} />);
        expect(screen.getByText('Card Text')).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('применяет классы иконок и текста', () => {
        render(<CardComponent {...defaultProps} />);

        const icon = screen.getByTestId('icon').closest('div');
        expect(icon).toHaveClass('icon-class');
        expect(icon).toHaveStyle({ marginBottom: defaultProps.iconMarginBottom });

        const text = screen.getByText('Card Text');
        expect(text).toHaveClass('text-class');
    });
});
