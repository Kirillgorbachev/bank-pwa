import { useState } from 'react';

import styles from './CardDesign.module.scss';

interface ICardDesignSelectorProps {
    colors: string[];
    onColorSelect: (color: string) => void;
}

export const CardDesign = ({ colors, onColorSelect }: ICardDesignSelectorProps) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorClick = (color: string) => {
        setSelectedColor(selectedColor === color ? null : color);
        onColorSelect(color);
    };

    return (
        <div className={styles.colorPicker}>
            {colors.map((color) => (
                <div
                    key={color}
                    className={`${styles.colorOptionWrapper} ${selectedColor === color ? styles.selectedWrapper : ''}`}>
                    <div
                        className={styles.colorOption}
                        style={{ background: color }}
                        onClick={() => handleColorClick(color)}
                    />
                </div>
            ))}
            <div className={styles.colorLast}>+</div>
        </div>
    );
};
