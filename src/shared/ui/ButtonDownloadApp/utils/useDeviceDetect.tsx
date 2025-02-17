import { useEffect, useState } from 'react';

export const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 480px)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 480px)');
        const handleChange = () => setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return { isMobile };
};
