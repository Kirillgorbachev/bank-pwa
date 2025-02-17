import cls from '../ui/ContentIosInstuction.module.scss';

interface IStepProps {
    stepNumber: number;
    text: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
}

export const StepComponent = ({ stepNumber, text, imageSrc, imageAlt }: IStepProps) => (
    <div className={cls.stepContainer}>
        <p className={cls.stepText}>
            <span className={cls.stepNumber}>Шаг {stepNumber}.</span> {text}
            {imageSrc && (
                <span className={cls.manualPage}>
                    <img src={imageSrc} alt={imageAlt} className={cls.manualPage} />
                </span>
            )}
        </p>
    </div>
);
