import { IconMappingCategory } from './IconMappingCategories';

import styles from './ListCategoriesComponent.module.scss';

import { formatNumber } from '@/app/utils/formatNumber';
import type { TSuperCategory } from '@/shared/types/superCategories';
import type { ISuperCategoryItem } from '@/shared/types/transactionTypes';

interface ICategoriesComponentProps extends ISuperCategoryItem {
    onSelectCategory: (superCategory: TSuperCategory) => void;
}

export const CategoriesComponent = ({ superCategory, amount, onSelectCategory }: ICategoriesComponentProps) => (
    <div key={superCategory} className={styles.categoryBox} onClick={() => onSelectCategory(superCategory)}>
        <div className={styles.categoryBoxLeft}>
            {IconMappingCategory[superCategory]}
            <p>{superCategory}</p>
        </div>
        <p className={styles.categoryAmount}>{formatNumber(Math.abs(amount))} ₽</p>
    </div>
);
