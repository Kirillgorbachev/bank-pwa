import { useRef, useState } from 'react';

import { Modal } from '../../Modal';
import { PeriodSelection } from '../../PeriodSelection';

import { MonthSelectPeriod } from './MonthSelectPeriod';

import styles from './MonthSelector.module.scss';

import { useDragScroll } from '@/app/hooks/useDragScroll/useDragScroll';
import { getLastMonth } from '@/shared/lib/dateUtils';

interface IMonthSelectorProps {
    onMonthChange: (month: string) => void;
}

export const MonthSelector = ({ onMonthChange }: IMonthSelectorProps) => {
    const conteinerRef = useRef<HTMLDivElement>(null);
    const { handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } = useDragScroll(conteinerRef);
    const months = getLastMonth();
    const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    const handleMonthClick = (monthWithYear: string) => {
        setSelectedMonth(monthWithYear);
        onMonthChange(monthWithYear);
    };

    return (
        <div
            className={styles.monthSelectorConteiner}
            ref={conteinerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}>
            <MonthSelectPeriod onClick={openModal} />
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType="long">
                <PeriodSelection handlePeriodSelection={closeModal} />
            </Modal>
            {months.map((monthWithYear) => {
                const [month] = monthWithYear.split(' ');

                return (
                    <p
                        key={monthWithYear}
                        onClick={() => handleMonthClick(monthWithYear)}
                        className={selectedMonth === monthWithYear ? styles.active : styles.disable}>
                        {month.charAt(0).toUpperCase() + month.slice(1)}
                    </p>
                );
            })}
        </div>
    );
};
