import { LoansIcon } from '@/shared/assets/icons/loansIcon';
import { ServicesIcon } from '@/shared/assets/icons/ServicesIcon';
import { SupermarketIcon } from '@/shared/assets/icons/SupermarketIcon';
import { TransfersIcon } from '@/shared/assets/icons/TransfersIcon';
import type { TSuperCategory } from '@/shared/types/superCategories';

export const IconMappingCategory: Record<TSuperCategory, JSX.Element> = {
    ['Супермаркет']: <SupermarketIcon />,
    ['Кредиты и задолжности']: <LoansIcon />,
    ['Переводы']: <TransfersIcon />,
    ['Обслуживание']: <ServicesIcon />,
};
