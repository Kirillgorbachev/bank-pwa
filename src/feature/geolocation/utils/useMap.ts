import { useEffect, useRef } from 'react';

import type { TCoordinates } from '@/feature/geolocation/types/typesGeo';

export const useMap = (coordinates: TCoordinates | null) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<any>(null);

    useEffect(() => {
        if (coordinates && mapContainerRef.current && !mapRef.current) {
            const { latitude, longitude } = coordinates;
            const ymaps = (window as any).ymaps;
            ymaps.ready(() => {
                mapRef.current = new ymaps.Map(mapContainerRef.current, {
                    center: [latitude, longitude],
                    zoom: 15,
                });

                const placemark = new ymaps.Placemark([latitude, longitude], {
                    balloonContent: `Широта: ${latitude}, Долгота: ${longitude}`,
                });

                mapRef.current.geoObjects.add(placemark);
            });
        }
    }, [coordinates]);

    return mapContainerRef;
};
