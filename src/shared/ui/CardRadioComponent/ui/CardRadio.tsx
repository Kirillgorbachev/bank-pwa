import styles from './CardRadioComponent.module.scss';
interface IOption {
    label: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CardRadio = ({ label, value, checked, onChange }: IOption) => (
    <div className={styles.option}>
        <label className={styles.label}>
            <input
                type="radio"
                name="cardType"
                value={value}
                checked={checked}
                onChange={onChange}
                className={styles.radioInput}
            />
            <span className={styles.radioCircle}></span>
            {label}
        </label>
    </div>
);
