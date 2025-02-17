import { useState } from 'react';

import { CardDesign } from './CardDesign';

import styles from './CardDesign.module.scss';

interface ICardDesignSelectorProps {
    name: string | undefined;
    logo?: React.ReactNode;
}

export const CardDesignShow = ({ name, logo }: ICardDesignSelectorProps) => {
    const colorOptions = [
        'linear-gradient(170.12deg, #222625 7.41%, #171A19 137.62%)',
        'linear-gradient(230deg, #FFC701 4.91%, #FFED4A 72.85%)',
        'linear-gradient(208.81deg, #FF932F -35.09%, #FF51B9 111.2%)',
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0]);

    return (
        <div className={styles.cardDesign}>
            <p className={styles.title}>Дизайн</p>
            <div className={styles.cardShow} style={{ background: `${selectedColor}` }}>
                <p>{name}</p>
                <span className={styles.logoCardDesign}>{logo}</span>
            </div>
            <CardDesign colors={colorOptions} onColorSelect={setSelectedColor} />
        </div>
    );
};
