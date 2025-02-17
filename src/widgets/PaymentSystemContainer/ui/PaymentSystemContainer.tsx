import { useRef } from 'react';

import cls from './PaymentSystemContainer.module.scss';

import { useDragScroll } from '@/app/hooks/useDragScroll/useDragScroll';
import { PaymentOption } from '@/shared/ui/PaymentOption/ui/PaymentOption';
import { useGetPaymentSystemsQuery } from '@/widgets/PaymentSystemContainer/api/PaymentSystemApi';
import type { TPaymentLogoKey } from '@/widgets/PaymentSystemContainer/const/logoKeys';
import { mapLogo } from '@/widgets/PaymentSystemContainer/utils/logoMapper';

interface IPaymentSystemContainerProps {
    selected: TPaymentLogoKey;
    onSelect: (id: TPaymentLogoKey) => void;
}

export const PaymentSystemContainer = ({ selected, onSelect }: IPaymentSystemContainerProps) => {
    const conteinerRef = useRef<HTMLDivElement>(null);
    const { handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } = useDragScroll(conteinerRef);
    const { data: paymentOptions = [] } = useGetPaymentSystemsQuery();

    const handleSelect = (id: TPaymentLogoKey) => {
        onSelect(id);
    };

    return (
        <div className={cls.container}>
            <h2 className={cls.title}>Платежная система</h2>
            <div
                className={cls.options}
                ref={conteinerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}>
                {paymentOptions.map((option) => (
                    <PaymentOption
                        key={option.id}
                        label={option.label}
                        logo={mapLogo(option.logo as TPaymentLogoKey)}
                        selected={selected === option.logo}
                        onClick={() => handleSelect(option.logo as TPaymentLogoKey)}
                    />
                ))}
            </div>
        </div>
    );
};
