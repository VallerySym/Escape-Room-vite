import { TileLayer, MapContainer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import { URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  latitude: number;
  longitude: number;
}

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [23, 42],
  iconAnchor: [11.5, 42],
});

function Map({ latitude, longitude }: MapProps): JSX.Element {

  return (
    <div className="map">
      <MapContainer
        className="map__container"
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={currentCustomIcon} />
      </MapContainer>
    </div>
  );
}
export default Map;
