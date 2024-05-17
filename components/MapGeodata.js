import { TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Overlay,
  Container,
  InformationDisplay,
  SelectedLatLng,
  SaveDiv,
  StyledMapContainer,
} from "./styledComponents/MapGeodata.styled";
import MapEvents from "./MapEvents";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl:
    "https://cdn2.iconfinder.com/data/icons/social-media-8/512/pointer.png",
  iconSize: [55, 55],
});

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
        <InformationDisplay>
          <SelectedLatLng>Selected Longitude: {lng}</SelectedLatLng>
          <SelectedLatLng>Selected Latitude: {lat} </SelectedLatLng>
        </InformationDisplay>
        <StyledMapContainer center={[52.3, 9.7]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents onClick={onHandleClick} />
          {clickedPosition && (
            <Marker position={clickedPosition} icon={customIcon}></Marker>
          )}
        </StyledMapContainer>
        <SaveDiv onClick={onClickClose}>Save</SaveDiv>
      </Container>
    </Overlay>
  );
}
