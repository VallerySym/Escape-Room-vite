import { TileLayer, MapContainer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
    latitude: number;
    longitude: number;
}

function Map({ latitude, longitude }: MapProps): JSX.Element {
    return (
        <div className="map">
            <MapContainer
                className="map__container"
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} />
            </MapContainer>
        </div>
    );
}

export default Map;