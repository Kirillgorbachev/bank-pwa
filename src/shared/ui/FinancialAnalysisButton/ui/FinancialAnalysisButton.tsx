import { useState } from 'react';

import { getCountWests } from '@/app/utils/getCountWests';
import { useGetCardsQuery } from '@/entities/Card/api/CardsApi';
import { getCurrentMonthName, getCurrentYear } from '@/shared/lib/dateUtils';
import { filterByPeriod } from '@/shared/lib/filterTransactions';
import { FinancialAnalysis } from '@/shared/ui/FinancialAnalysis';
import { FinancialAnalysisComponent } from '@/shared/ui/FinancialAnalysisButton/ui/FinancialAnalysisComponent';
import { Modal } from '@/shared/ui/Modal/ui/Modal';

export const FinancialAnalysisButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const { data: options = [] } = useGetCardsQuery();
    const cardInfo = options.flatMap((card) => card.info ?? []);
    const allFilteredTransactions = filterByPeriod(cardInfo, `${getCurrentYear()}`, getCurrentMonthName());
    const countWests = cardInfo.length > 0 ? getCountWests(allFilteredTransactions, 'Списание') : 0;

    return (
        <>
            <FinancialAnalysisComponent onClick={openModal} currentMonthExpenses={countWests} />
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType="long">
                <FinancialAnalysis />
            </Modal>
        </>
    );
};
