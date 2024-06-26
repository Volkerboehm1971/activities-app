import styled from "styled-components";
import { Devices } from "./Devices.styles";


export const Navigation = styled.nav`
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 10px;
  background-color: #85CCE1;
  z-index: 10000;
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const LinkElement = styled.a`
  ${(props) => props.active}
`;
