import { toast } from 'react-toastify';

interface IVibrationPattern {
    pattern: number | number[];
}

export const isHapticSupported = () =>
    typeof window !== 'undefined' && /iPhone/u.test(navigator.userAgent) && 'DeviceMotionEvent' in window;

export const vibrate = ({ pattern }: IVibrationPattern) => {
    if ('vibrate' in navigator) {
        // Если поддерживается Vibration API
        navigator.vibrate(pattern);
    } else {
        toast.error('Вибрация не поддерживается на этом устройстве.');
    }
};

export const triggerHapticFeedback = () => {
    try {
        if (window.navigator && window.navigator.userAgent.includes('iPhone')) {
            // Использование Web API для эмуляции haptic
            window.navigator.vibrate(50);
        } else {
            throw new Error('Haptic Feedback не поддерживается');
        }
    } catch (error) {
        toast.error('Ошибка при активации Haptic Feedback');
    }
};
