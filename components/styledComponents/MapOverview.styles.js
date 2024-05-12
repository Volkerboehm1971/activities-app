import styled from "styled-components";
import { MapContainer, Popup } from "react-leaflet";

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MapOverviewContainer = styled.div`
  width: 350px;
  height: 380px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MapOverviewButton = styled.button`
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

export const StyledMapContainer = styled(MapContainer)`
  width: 350px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextPopUp = styled(Popup)`
  max-width: 200px;
  display: flex;
  flex-direction: column;
`;
export const PopUpListe = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const PopUpLi = styled.li`
  margin: 5px 0 5px 0;
`;
