import { useState } from 'react';

import './PaymentPage.scss';

import { ActionsBtnPayServices } from '@/shared/ui/ActionsBtnPayServices/ui/ActionsButtonPayServices';
import { PaymentBtnPayServices } from '@/shared/ui/PaymentBtnPayServices/ui/PaymentBtnPayServices';
import { ArrowNavigation } from '@/shared/ui/PaymentCardPay/CarouselHeader/ArrowNavigation';
import { PaymentCardPay } from '@/shared/ui/PaymentCardPay/ui/PaymentCardPay';
import { PaymentCardTransfers } from '@/shared/ui/PaymentCardTransfers/ui/PaymentCardTransfers';
import { TitleComponent } from '@/shared/ui/Title';

const PaymentPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handlePrevious = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev < 1 ? prev + 1 : prev));
    };

    return (
        <div className="payment-container">
            <div className="paymentPage">
                <TitleComponent text="Платежи" />
                <ArrowNavigation
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    currentPage={currentPage}
                    totalPages={2}
                />
            </div>
            <PaymentCardPay currentPage={currentPage} totalPages={2} />
            <PaymentCardTransfers />
            <PaymentBtnPayServices />
            <ActionsBtnPayServices />
        </div>
    );
};

export default PaymentPage;
