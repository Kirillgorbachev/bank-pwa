import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useDeviceOS } from '@/app/hooks/useDeviceOS';
import type { IRootState } from '@/app/store';

export const useShowModalOnLogin = () => {
    const { osName } = useDeviceOS();
    const [isModalOpen, setModalOpen] = useState(false);
    const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn);
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

    useEffect(() => {
        const isMobileDevice = osName === 'iOS' || osName === 'AndroidOS';
        const shouldOpenModal = isLoggedIn && !isPWA && isMobileDevice;
        setModalOpen(shouldOpenModal);
    }, [isLoggedIn, osName, isPWA]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return { isModalOpen, openModal, closeModal, osName };
};
