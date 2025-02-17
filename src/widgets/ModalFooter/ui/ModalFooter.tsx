import cls from './ModalFooter.module.scss';

import { ButtonMain } from '@/shared/ui/ButtonMain';
import { PriceInfo } from '@/shared/ui/PriceInfoBlock/ui/PriceInfo';

interface IModalFooterProps {
    price: number;
    buttonText: string;
    onButtonClick: () => void;
}

export const ModalFooter = ({ price, buttonText, onButtonClick }: IModalFooterProps) => (
    <div className={cls.container}>
        <PriceInfo price={price} />
        <div className={cls.buttonContainer}>
            <ButtonMain title={buttonText} isActive onClick={onButtonClick} />
        </div>
    </div>
);
