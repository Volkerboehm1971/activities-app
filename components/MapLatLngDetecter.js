import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import MapEvents from "./MapEvents";
import { useState } from "react";
import { Icon } from "leaflet";
import { StyledMapContainer } from "./styledComponents/DetailMap.styles";

const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 450px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

const SpanContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SelectedLatLng = styled.div`
  width: 230px;
  font-size: 12px;
  margin: 5px;
`;

const MapDetectButton = styled.div`
  background-color: #ffffff;
  width: 50px;
  padding: 10px 40px 10px 40px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: center;
`;

const StylMapContainer = styled(MapContainer)`
  width: 250px;
  height: 350px;
  border-radius: 10px;
`;

export default function MapLatLngDetecter({ onClickClose }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);

  function handleClick(e) {
    const { lat, lng } = e.latlng;
    setLat(lat);
    setLng(lng);
    setClickedPosition([lat, lng]);
  }

  console.log(lat);
  console.log(lng);
  return (
    <Overlay>
      <Container>
        <SpanContainer>
          <SelectedLatLng>Selected Latitude: </SelectedLatLng>
          <SelectedLatLng>Selected Longitude: </SelectedLatLng>
        </SpanContainer>
        <StylMapContainer center={[52.3, 9.7]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents onClick={handleClick} />
          {clickedPosition && <Marker position={clickedPosition}></Marker>}
        </StylMapContainer>
        <MapDetectButton onClick={onClickClose}>Save</MapDetectButton>
      </Container>
    </Overlay>
  );
}
