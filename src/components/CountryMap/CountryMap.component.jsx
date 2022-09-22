import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const CountryMap = ({ coords, name }) => {
  const [x, y, ...z] = coords;
  return (
    <MapContainer
      className="country-map"
      center={[x, y]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.tile.openstreetmap.org/5/{x}/{y}.png`}
        className="map-tiles"
        ZoomON
      />
      <Marker position={[x, y]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CountryMap;
