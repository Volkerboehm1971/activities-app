import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Container = styled.div`
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

export const SpanContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const SelectedLatLng = styled.div`
  width: 230px;
  font-size: 12px;
  margin: 5px;
`;

export const MapDetectButton = styled.div`
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

export const StylMapContainer = styled(MapContainer)`
  width: 250px;
  height: 350px;
  border-radius: 10px;
`;
