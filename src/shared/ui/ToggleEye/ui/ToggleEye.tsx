import cls from './ToggleEye.module.scss';

interface IToggleEyeProps {
    openIcon: React.ReactNode;
    closeIcon: React.ReactNode;
    eyeIcon: boolean;
    onToggle: () => void;
    isVisible?: boolean;
}

export const ToggleEye = ({ openIcon, closeIcon, eyeIcon, onToggle, isVisible = false }: IToggleEyeProps) => (
    <button
        type="button"
        className={`${cls.iconButton} ${isVisible ? '' : cls.disabled}`}
        onClick={() => onToggle()}
        aria-label="Toggle password visibility">
        {eyeIcon ? openIcon : closeIcon}
    </button>
);
