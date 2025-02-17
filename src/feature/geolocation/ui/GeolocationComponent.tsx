import './GeolocationComponent.scss';

import { useGeolocation } from '@/feature/geolocation/utils/useGeolocation';
import { useMap } from '@/feature/geolocation/utils/useMap';

export const GeolocationComponent = () => {
    const { coordinates, loading, denied } = useGeolocation();
    const mapContainerRef = useMap(coordinates);

    return (
        <div>
            {loading && <div className="loading-text">Загрузка Вашей геолокации...</div>}
            {denied && <div className="error-text">Вы запретили доступ к вашему местоположению</div>}
            {!loading && coordinates && <div ref={mapContainerRef} className="map-container"></div>}
        </div>
    );
};
