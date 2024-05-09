import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Icon } from "leaflet";

const StyledMapContainer = styled(MapContainer)`
  margin: 8px 0 0 0;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  z-index: 1;
`;

export default function MapDetail() {
  const customIcon = new Icon({
    iconUrl: require,
    iconSize: [38, 38],
  });

  const geocode = [38.646806, 34.8491554];
  return (
    <StyledMapContainer
      center={[38.646806, 34.8491554]}
      zoom={10}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={geocode} icon={customIcon}></Marker>
    </StyledMapContainer>
  );
}
