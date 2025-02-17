import { MastercardLogo } from '@/shared/assets/icons/MastercardLogo';
import { MirLogo } from '@/shared/assets/icons/MirLogo';
import { VisaLogo } from '@/shared/assets/icons/VisaLogo';
import type { TPaymentLogoKey } from '@/widgets/PaymentSystemContainer/const/logoKeys';
import { PaymentLogoKeys } from '@/widgets/PaymentSystemContainer/const/logoKeys';

const logoMapper: Record<TPaymentLogoKey, React.ReactNode> = {
    [PaymentLogoKeys.MASTERCARD]: <MastercardLogo />,
    [PaymentLogoKeys.VISA]: <VisaLogo />,
    [PaymentLogoKeys.MIR]: <MirLogo />,
};

export const mapLogo = (logoKey: TPaymentLogoKey): React.ReactNode => logoMapper[logoKey] || null;
