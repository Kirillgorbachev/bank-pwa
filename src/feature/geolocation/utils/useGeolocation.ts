import { useEffect, useState } from 'react';

import { getGeolocation } from '../utils/getGeolocation';

import type { TCoordinates } from '@/feature/geolocation/types/typesGeo';

export const useGeolocation = () => {
    const [coordinates, setCoordinates] = useState<TCoordinates | null>(null);
    const [loading, setLoading] = useState(true);
    const [denied, setDenied] = useState(false);

    useEffect(() => {
        let isMounted = true;

        getGeolocation(
            (coords) => {
                if (isMounted) {
                    setCoordinates(coords);
                    setLoading(false);
                }
            },
            (isDenied) => {
                if (isMounted && isDenied) {
                    setDenied(true);
                    setLoading(false);
                }
            },
        );

        return () => {
            isMounted = false;
        };
    }, []);

    return { coordinates, loading, denied };
};
