import { useState } from 'react';

import styles from './TransactionFilter.module.scss';

type TTransactionFilterProps = {
    onFilterChange: (filter: string) => void;
};

export const TransactionFilter = ({ onFilterChange }: TTransactionFilterProps) => {
    const [activeFilter, setActiveFilter] = useState('Все');

    const hendleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    const filterName = ['Все', 'Пополнение', 'Списание'];

    return (
        <div className={styles.FilterConteiner}>
            {filterName.map((name) => (
                <button
                    key={name}
                    className={activeFilter === name ? styles.active : styles.disable}
                    onClick={() => hendleFilterChange(name)}>
                    {name}
                </button>
            ))}
        </div>
    );
};
