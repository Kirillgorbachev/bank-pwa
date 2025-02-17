import type { TIconCardsKey } from '@/entities/Card/const/cardsKeys';
import { IconCardsKeys } from '@/entities/Card/const/cardsKeys';
import { MastercardIcon } from '@/shared/assets/icons/MastercardIcon';
import { MirCardIcon } from '@/shared/assets/icons/MirCardIcon';
import { PiggyBankIcon } from '@/shared/assets/icons/PiggyBankIcon';
import { VisaIcon } from '@/shared/assets/icons/VisaIcon';
import { CreditIcon } from '@/shared/assets/icons/СreditIcon';

const iconMapper: Record<TIconCardsKey, React.ReactNode> = {
    [IconCardsKeys.MASTERCARD]: <MastercardIcon />,
    [IconCardsKeys.VISA]: <VisaIcon />,
    [IconCardsKeys.MIR]: <MirCardIcon />,
    [IconCardsKeys.CREDITCARD]: <CreditIcon />,
    [IconCardsKeys.PIGGYBANK]: <PiggyBankIcon />,
};

export const mapIcon = (iconKey: TIconCardsKey): React.ReactNode => iconMapper[iconKey] || null;
