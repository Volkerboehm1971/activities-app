import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Overlay,
  Container,
  SpanContainer,
  SelectedLatLng,
  MapDetectButton,
  StylMapContainer,
} from "./styledComponents/MapGeodata.styled";
import MapEvents from "./MapEvents";

export default function MapGeodata({
  onClickClose,
  onHandleClick,
  lat,
  lng,
  clickedPosition,
}) {
  console.log(lat);
  console.log(lng);
  return (
    <Overlay>
      <Container>
        <SpanContainer>
          <SelectedLatLng>Selected Latitude: {lat} </SelectedLatLng>
          <SelectedLatLng>Selected Longitude: {lng}</SelectedLatLng>
        </SpanContainer>
        <StylMapContainer center={[52.3, 9.7]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents onClick={onHandleClick} />
          {clickedPosition && <Marker position={clickedPosition}></Marker>}
        </StylMapContainer>
        <MapDetectButton onClick={onClickClose}>Save</MapDetectButton>
      </Container>
    </Overlay>
  );
}
