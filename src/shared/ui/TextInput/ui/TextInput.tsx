import cls from './TextInput.module.scss';

interface ITextInputProps {
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ id, label, value, onChange }: ITextInputProps) => (
    <div className={cls.textInput}>
        <label htmlFor={id} className={cls.label}>
            {label}
        </label>
        <input type="text" className={cls.input} id={id} defaultValue={value} onChange={onChange} />
    </div>
);
