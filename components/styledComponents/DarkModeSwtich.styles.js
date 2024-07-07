import styled from "styled-components";
import Image from "next/image";
import { Devices } from "./Devices.styles";

export const Container = styled.div`
    display: flex;
`;

export const ImageSun = styled(Image)`
    position: absolute;
    right: 2px;
    z-index: 3;
`;

export const ImageMoon = styled(Image)`
        display: flex;
        z-index: 3;
`;

export const ToggelOverlay = styled.div`
    position: absolute;
    left: ${props => props.$isToggled ? "34px" : "0px" };
    transition: left 250ms ease-out;
    background-color: white;
    width: 33px;
    height: 29px;
    border-radius: 8px;
    margin-left: 2px;
    z-index: 2;
`;

export const ModalContainer = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    top: 102px;
    right: 15px;
    width: 73px;
    height: 35px;
    padding: 0;
    border: ${props => props.$isToggled ? "1px solid var(--secondary-color-light)" : "1px solid white" };
    border-radius: 10px;
    background-color: var(--primary-color-light);

    &:hover{
        cursor: pointer;
    }


    @media screen and (${Devices.xl}){
    right: 21vw;
  }
`;


