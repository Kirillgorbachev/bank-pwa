import { StepComponent } from '../components/StepBlock';
import { steps } from '../components/stepsData';

import style from './ContentIosInstuction.module.scss';

import { TitleComponent } from '@/shared/ui/Title';

export const IosInstruction = () => {
    const stepsToUse = steps;

    return (
        <div>
            <TitleComponent text="Выбирать из своих контактов" />
            <p className={style.attention}>Внимание! Данная функция поддерживается начиная с IOS 15</p>
            {stepsToUse.map(({ stepNumber, text, imageSrc, imageAlt }) => (
                <StepComponent
                    key={stepNumber}
                    stepNumber={stepNumber}
                    text={text}
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                />
            ))}
        </div>
    );
};
