import styles from '@/shared/ui/FinancialAnalysisButton/ui/FinancialAnalysisButton.module.scss';

import { formatNumber } from '@/app/utils/formatNumber';
import { Arrow } from '@/shared/assets/icons/Arrow';
import { ChartIcon } from '@/shared/assets/icons/ChartIcon';
import { getCurrentMonthName } from '@/shared/lib/dateUtils';

interface IFinancialAnalysisButtonProps {
    currentMonthExpenses: number;
    onClick: () => void;
}

export function FinancialAnalysisComponent({ onClick, currentMonthExpenses }: IFinancialAnalysisButtonProps) {
    const currentMonth = getCurrentMonthName().replace(/([ьй]$|$)/u, 'е');

    return (
        <div className={styles.financialBox} onClick={onClick}>
            <div className={styles.financialConteiner}>
                <ChartIcon />
                <span className={styles.financialText}>Траты в {currentMonth}</span>
            </div>
            <div className={styles.financialConteiner}>
                <span className={styles.financialText}>{formatNumber(currentMonthExpenses)} ₽</span>
                <Arrow />
            </div>
        </div>
    );
}
