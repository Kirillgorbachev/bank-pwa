import { useState } from 'react';

import { CardRadio } from './CardRadio';

import styles from './CardRadioComponent.module.scss';

export const CardRadioComponent = () => {
    const [selectedRadio, setSelectedRadio] = useState('plastic');

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(e.target.value);
    };

    return (
        <>
            <p className={styles.titleCardRadio}>Тип</p>
            <CardRadio value="plastic" label="Пластик" checked={selectedRadio === 'plastic'} onChange={change} />
            <CardRadio value="virtual" label="Виртуальная" checked={selectedRadio === 'virtual'} onChange={change} />
        </>
    );
};
