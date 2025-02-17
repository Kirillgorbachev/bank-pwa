import { BlackCard } from '@/shared/ui/DebitCardItem/assets/BlackCard';
import { GoldCard } from '@/shared/ui/DebitCardItem/assets/GoldCard';
import { SilverCard } from '@/shared/ui/DebitCardItem/assets/SilverCard';
import type { TIconCardsTypeKey } from '@/shared/ui/DebitCardList/const/cardsTypeKeys';
import { IconCardsTypeKeys } from '@/shared/ui/DebitCardList/const/cardsTypeKeys';

const iconCardTypeMapper: Record<TIconCardsTypeKey, React.ReactNode> = {
    [IconCardsTypeKeys.GoldCard]: <GoldCard />,
    [IconCardsTypeKeys.SilverCard]: <SilverCard />,
    [IconCardsTypeKeys.BlackCard]: <BlackCard />,
};

export const mapCardTypeIcon = (iconKey: TIconCardsTypeKey): React.ReactNode => iconCardTypeMapper[iconKey] || null;
