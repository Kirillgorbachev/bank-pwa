import { useNavigate } from 'react-router-dom';

import { Settings } from '@/shared/assets/icons/Settings';
import { routes } from '@/shared/const/router/router';

export const SettingsButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(routes.PWAFeatures);
    };

    return (
        <button onClick={onClick}>
            <Settings />
        </button>
    );
};
