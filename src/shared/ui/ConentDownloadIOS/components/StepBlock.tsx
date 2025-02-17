import cls from '../ui/ContentDownloadIOS.module.scss';

interface IStepProps {
    stepNumber: number;
    text: React.ReactNode;
    link?: string;
    icon?: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
}

export const StepComponent = ({ stepNumber, text, link, icon, imageSrc, imageAlt }: IStepProps) => (
    <div className={cls.stepContainer}>
        <p className={cls.stepText}>
            <span className={cls.stepNumber}>Шаг {stepNumber}.</span> {text}
            {link && (
                <a href={link} target="_blank" className={cls.link} rel="noreferrer">
                    {link}
                </a>
            )}
            {icon && <span>{icon}</span>}
        </p>
        {imageSrc && <img src={imageSrc} alt={imageAlt} className={cls.manualPage} />}
    </div>
);
