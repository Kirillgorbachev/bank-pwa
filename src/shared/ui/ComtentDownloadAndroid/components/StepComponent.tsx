import cls from '../ui/ContentDownloadAndroid.module.scss';

interface IStepProps {
    stepNumber: number;
    text: React.ReactNode;
    icon?: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
}

export const StepComponent = ({ stepNumber, text, icon, imageSrc, imageAlt }: IStepProps) => (
    <div className={cls.stepContainer}>
        <p className={cls.stepText}>
            Шаг {stepNumber}. {text}
            {icon && <span>{icon}</span>}
        </p>
        {imageSrc && <img src={imageSrc} alt={imageAlt} className={cls.manualPage} />}
    </div>
);
