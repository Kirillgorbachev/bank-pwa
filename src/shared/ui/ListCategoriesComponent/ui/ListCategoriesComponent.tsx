import { useState } from 'react';

import { CategoriesTransaction } from '../../CategoriesTransaction';
import { Modal } from '../../Modal';

import { CategoriesComponent } from './CategoriesComponent';

import styles from './ListCategoriesComponent.module.scss';

import { useGroupedData } from '@/app/hooks/useGroupedData';
import type { TSuperCategory } from '@/shared/types/superCategories';
import type { ISuperCategoryItem } from '@/shared/types/transactionTypes';
import type { ITransactionHistoryProps } from '@/shared/ui/TransactionHistory/ui/TransactionHistory';

interface IListCategoriesComponent extends ITransactionHistoryProps {
    selectedType: 'wastes' | 'deposits';
}

export const ListCategoriesComponent = ({ transactions, selectedType }: IListCategoriesComponent) => {
    const [selectedCategory, setSelectedCategory] = useState<TSuperCategory>('Супермаркет');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const safeTransactions = transactions || [];

    const groupedData = useGroupedData(safeTransactions, (item) => item.superCategory);

    const categoriesWithSum: ISuperCategoryItem[] = groupedData.map(({ groupKey, items }) => ({
        superCategory: groupKey as TSuperCategory,
        amount: items.reduce((sum, item) => sum + item.amount, 0),
    }));

    const handleCategoryClick = (superCategory: TSuperCategory) => {
        setSelectedCategory(superCategory);
        openModal();
    };

    return (
        <div className={styles.listCategories}>
            {categoriesWithSum.map(({ superCategory, amount }) => (
                <CategoriesComponent
                    key={superCategory}
                    superCategory={superCategory}
                    amount={amount}
                    onSelectCategory={handleCategoryClick}
                />
            ))}
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} modalStyleType="long">
                <CategoriesTransaction
                    transactions={transactions}
                    selectedCategory={selectedCategory}
                    selectedType={selectedType}
                />
            </Modal>
        </div>
    );
};
