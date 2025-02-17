import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import './PushNotification.scss';

interface IPushNotificationProps {
    onNotificationSent: () => void;
}

export const PushNotification = ({ onNotificationSent }: IPushNotificationProps) => {
    const [permission, setPermission] = useState<NotificationPermission>(Notification.permission);

    useEffect(() => {
        if (permission === 'default') {
            Notification.requestPermission().then((result) => {
                setPermission(result);
            });
        }
    }, [permission]);

    const sendPushNotification = async () => {
        if (permission !== 'granted') {
            toast.error('Разрешение на пуш-уведомления не предоставлено');

            return;
        }

        if ('PushManager' in window) {
            try {
                const registration = await navigator.serviceWorker.getRegistration();

                if (registration) {
                    const options = {
                        title: 'Привет!',
                        body: 'Это твое пуш-уведомление!',
                    };
                    await registration.showNotification(options.title, {
                        body: options.body,
                        icon: '/icon-192x192.png',
                    });
                    console.log('Push уведомление отправлено');
                    onNotificationSent();
                } else {
                    console.log('Service Worker не зарегистрирован');
                    toast.error('Service Worker не зарегистрирован');
                }
            } catch (error) {
                console.error('Ошибка при отправке Push уведомления:', error);
            }
        } else {
            toast.error('Push уведомления не поддерживаются этим браузером');
        }
    };

    return (
        <div className="container">
            <button onClick={sendPushNotification}>Отправить Push уведомление!</button>
        </div>
    );
};
