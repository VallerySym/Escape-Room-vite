import { TileLayer, MapContainer, Marker } from 'react-leaflet';
import { BookingQuest} from '../../types/booking-quest';
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
    locations?: BookingQuest[];
    latitude: number;
    longitude: number;
}

function Map({ locations, latitude, longitude }: MapProps): JSX.Element {
  const [activeMarker, setActiveMarker] = useState<string | null>(locations ? locations[0].id : null);

  useEffect(() => {
    if (locations && locations.length > 0) {
      setActiveMarker(locations[0].id);
    }
  }, [locations]);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [23, 42],
    iconAnchor: [11.5, 42],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [23, 42],
    iconAnchor: [11.5, 42],
  });

  const handleMarkerClick = (id: string) => {
    setActiveMarker(id);
  };

  return (
    <div className="map">
      <MapContainer
        className="map__container"
        center={[latitude, longitude]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations && locations?.length > 0 ? locations?.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.location.coords[0], marker.location.coords[1]]}
            icon={marker.id === activeMarker ? currentCustomIcon : defaultCustomIcon}
            eventHandlers={{ click: () => handleMarkerClick(marker.id) }}
          />
        )) : <Marker position={[latitude, longitude]} icon={defaultCustomIcon} />}
      </MapContainer>
    </div>
  );
}
export default Map;
