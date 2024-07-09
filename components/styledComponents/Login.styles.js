import styled from "styled-components";
import { Devices } from "./Devices.styles";

export const LoginNoutButton = styled.button`
  position: absolute;
  top: 40px;
  right: 15px;
  text-decoration: none;
  color: #ffffff;
  background-color: var(--primary-color-light);
  border: 5px solid var(--primary-color-light);
  border-radius: 5px;
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 25px;

  &:hover {
    background-color: var(--secondary-color-light);
    border-color: var(--secondary-color-light);
  }

  &:active {
    background-color: var(--secondary-color-light);
    border-color: var(--secondary-color-light);
  }

  @media screen and (${Devices.xl}){
    right: 21vw;
  }
`;

export const LoginStatus = styled.p`
  position: absolute;
  top: 20px;
  right: 15px;
  text-align: right;

  @media screen and (${Devices.xl}){
    right: 21vw;
  }
`;
