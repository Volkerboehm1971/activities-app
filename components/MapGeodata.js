import {
  Overlay,
  Container,
  InformationDisplay,
  SelectedLatLng,
  SaveDiv,
  StyledMapContainer,
} from "./styledComponents/MapGeodata.styled";
import { TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MapEvents from "./MapEvents";

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
  defaultLat,
  defaultLng,
}) {
  return (
    <Overlay>
      <Container>
        <InformationDisplay>
          <SelectedLatLng>
            Selected Longitude:{" "}
            {lng !== null ? lng : defaultLng ? defaultLng : ""}
          </SelectedLatLng>
          <SelectedLatLng>
            Selected Latitude:{" "}
            {lat !== null ? lat : defaultLat ? defaultLat : ""}
          </SelectedLatLng>
        </InformationDisplay>
        <StyledMapContainer center={[52.3, 9.7]} zoom={5} zoomControl={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEvents onClick={onHandleClick} />
          {clickedPosition ? (
            <Marker position={clickedPosition} icon={customIcon}></Marker>
          ) : (
            defaultLat &&
            defaultLng && (
              <Marker
                position={[defaultLat, defaultLng]}
                icon={customIcon}
              ></Marker>
            )
          )}
        </StyledMapContainer>
        <SaveDiv onClick={onClickClose}>Save</SaveDiv>
      </Container>
    </Overlay>
  );
}
