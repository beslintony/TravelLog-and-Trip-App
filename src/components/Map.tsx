import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Map = () => {
  return (
    <MapContainer
      style={{ height: '98vh', width: '100%' }}
      center={[52.52, 13.405]}
      zoom={16}
      minZoom={2}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[52.52, 13.405]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
          <img
            style={{ height: '100%', width: '100%' }}
            src='https://mdn.github.io/learning-area/html/multimedia-and-embedding/tasks/images/larch.jpg'
            alt='Several tall evergreen trees called larches'
          ></img>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
