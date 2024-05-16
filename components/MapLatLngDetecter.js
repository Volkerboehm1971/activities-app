import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import MapEvents from "./MapEvents";
import { useState } from "react";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 330px;
  height: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(200, 200, 200, 5);
  z-index: 999;
`;

const StylMapContainer = styled(MapContainer)`
  width: 350px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

export default function MapLatLngDetecter() {
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
    <>
      <StyledSection>
        <StylMapContainer center={[52.3, 9.7]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents onClick={handleClick} />
          {clickedPosition && <Marker position={clickedPosition}></Marker>}
        </StylMapContainer>
      </StyledSection>
    </>
  );
}
