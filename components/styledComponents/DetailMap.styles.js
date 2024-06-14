import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import { Devices } from "./Devices.styles";

export const StyledMapContainer = styled(MapContainer)`
  margin: 8px 0 0 0;
  width: 315px;
  height: 200px;
  border-radius: 10px;
  z-index: 1;

  @media only screen and (${Devices.xl}){
    width: 100%;
    height: 330px;
  }
`;
