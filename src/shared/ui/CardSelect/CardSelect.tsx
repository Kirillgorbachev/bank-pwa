import type { SingleValue } from 'react-select';
// eslint-disable-next-line @typescript-eslint/naming-convention
import Select from 'react-select';

import cls from './CardSelect.module.scss';

interface ICardOption {
    value: string;
    label: string;
    balance: string;
    icon: React.ReactNode;
}

interface ICardSelectProps {
    options: ICardOption[];
    selected: string;
    onChange: (value: string) => void;
    label?: string;
}

export const CardSelect = ({ options, selected, onChange, label }: ICardSelectProps) => {
    // Преобразуем данные для react-select
    const customOptions = options.map((option) => ({
        value: option.value,
        label: (
            <div className={cls.option}>
                <div className={cls.cardIcon}>{option.icon}</div>
                <div className={cls.cardDetails}>
                    <span className={cls.cardBalance}>{option.balance} ₽</span>
                    <span className={cls.cardLabel}>{option.label}</span>
                </div>
            </div>
        ),
    }));

    // Определяем выбранный элемент
    const selectedOption = customOptions.find((opt) => opt.value === selected);

    const selectId = 'card-select-id';

    return (
        <div className={cls.cardSelect}>
            {label && (
                <label htmlFor={selectId} className={cls.label}>
                    {label}
                </label>
            )}
            <Select
                value={selectedOption}
                inputId={selectId}
                onChange={(newValue: SingleValue<{ value: string }>) => onChange(newValue?.value || '')}
                options={customOptions}
                isSearchable={false}
                classNamePrefix="react-select"
                styles={{
                    control: (base) => ({
                        ...base,
                        border: 'none',
                        borderColor: '#e0e0e0',
                        boxShadow: 'none',
                        padding: '0',
                        backgroundColor: 'transparent',
                    }),
                    singleValue: (base) => ({
                        ...base,
                        display: 'flex',
                        alignItems: 'center',
                        margin: 0,
                    }),
                    indicatorSeparator: () => ({
                        display: 'none',
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        color: '#868C92',
                    }),
                    menu: (base) => ({
                        ...base,
                        backgroundColor: '#FFFFFF',
                        borderRadius: '8px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        width: '520px',
                    }),
                    option: (base, state) => ({
                        ...base,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 12px',
                        cursor: 'pointer',
                        backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
                        color: state.isSelected ? '#000000' : base.color,
                    }),
                }}
            />
        </div>
    );
};
