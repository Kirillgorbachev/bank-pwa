import classNames from 'classnames';

import cls from './CloseModalButton.module.scss';

import { Cross } from '@/shared/assets/icons/Cross';

interface ICloseModalButton {
    onClick: () => void;
    className?: string;
}

export const CloseModalButton = ({ onClick, className }: ICloseModalButton) => (
    <button className={classNames(cls.button, className)} onClick={onClick}>
        <Cross />
    </button>
);
