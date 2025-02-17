import { toast } from 'react-toastify';

import { useDeviceOS } from '@/app/hooks/useDeviceOS';
import { isHapticSupported, triggerHapticFeedback, vibrate } from '@/feature/vibration/model/Vibration';
import { ButtonMain } from '@/shared/ui/ButtonMain';

export const VibrateButton = () => {
    const { osName } = useDeviceOS();

    if (osName === 'desktop') {
        return null;
    }

    const handleClick = () => {
        if ('vibrate' in navigator) {
            vibrate({ pattern: [200, 100, 200] });
        } else if (isHapticSupported()) {
            triggerHapticFeedback();
        } else {
            toast.error('Вибрация не поддерживается на этом устройстве.');
        }
    };

    return <ButtonMain title="Вибрация" onClick={handleClick} isActive />;
};
