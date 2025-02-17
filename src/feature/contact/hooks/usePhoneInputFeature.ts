import { useState } from 'react';

import { useReadContacts } from './useReadContacts';

import { useBrowserInfo } from '@/app/hooks/useBrauserInfo';
import { useDeviceOS } from '@/app/hooks/useDeviceOS';
import { BrowserNameEnum } from '@/app/utils/detectBrowser';

export const usePhoneInputFeature = () => {
    const { isAvailable } = useReadContacts();
    const deviceInfo = useDeviceOS();
    const browserInfo = useBrowserInfo();
    const [isInstructionVisible, setInstructionVisible] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleInputClick = () => {
        if (
            ((deviceInfo.osName === 'AndroidOS' && browserInfo === BrowserNameEnum.Chrome) ||
                (deviceInfo.osName === 'iOS' && browserInfo === BrowserNameEnum.Safari)) &&
            isAvailable
        ) {
            setShowContact(true);
        } else if (deviceInfo.osName === 'iOS' && browserInfo === BrowserNameEnum.Safari && !isAvailable) {
            setInstructionVisible(true);
        }
    };

    const closeInstruction = () => {
        setInstructionVisible(false);
    };

    return {
        showContact,
        isInstructionVisible,
        setShowContact,
        handleInputClick,
        closeInstruction,
    };
};
