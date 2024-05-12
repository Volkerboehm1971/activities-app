import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { X } from "lucide-react";

const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MapOverviewContainer = styled.div`
  width: 350px;
  height: 380px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledMapContainer = styled(MapContainer)`
  width: 350px;
  height: 380px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MapOverviewButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  z-index: 999;
`;

export default function MapOverview({ onClickClose }) {
  const geocode = [50, 10];
  return (
    <>
      <Overlay>
        <MapOverviewContainer>
          <MapOverviewButton onClick={onClickClose}>
            <X />
          </MapOverviewButton>

          <StyledMapContainer center={geocode} zoom={5} zoomControl={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </StyledMapContainer>
        </MapOverviewContainer>
      </Overlay>
    </>
  );
}
