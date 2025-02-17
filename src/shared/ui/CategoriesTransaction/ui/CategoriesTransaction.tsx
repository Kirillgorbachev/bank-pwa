import { TitleComponent } from '../../Title';
import { TransactionHistory } from '../../TransactionHistory';
import type { ITransactionHistoryProps } from '../../TransactionHistory/ui/TransactionHistory';

import styles from './CategoriesTransaction.module.scss';

import { getCountWests } from '@/app/utils/getCountWests';
import { getOperationText } from '@/shared/lib/getOperationText';
import type { TSuperCategory } from '@/shared/types/superCategories';

interface ICategoriesTransactionProps extends ITransactionHistoryProps {
    selectedCategory: TSuperCategory;
    selectedType: 'wastes' | 'deposits';
}

export const CategoriesTransaction = ({
    transactions,
    selectedCategory,
    selectedType,
}: ICategoriesTransactionProps) => {
    const safeTransactions = transactions || [];
    const allTransactions = safeTransactions.filter((transaction) => transaction.superCategory === selectedCategory);
    const sumTransaction = getCountWests(
        allTransactions,
        selectedType === 'wastes' ? 'Списание' : 'Пополнение',
    ).toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    const numberTransaction = allTransactions.length;

    return (
        <>
            <TitleComponent text={selectedCategory} />
            <div className={styles.categoryTotal}>
                <p>{getOperationText(numberTransaction)}</p>
                <p>{sumTransaction}</p>
            </div>
            <TransactionHistory transactions={allTransactions} currentFilter={selectedCategory} />
        </>
    );
};
