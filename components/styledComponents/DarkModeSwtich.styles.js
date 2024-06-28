import styled from "styled-components";
import Image from "next/image"

export const Container = styled.div`
    display: flex;
`;

export const ImageSun = styled(Image)`
    display: flex;
`;

export const ImageMoon = styled(Image)`
    display: flex;
    margin-top: 4px;
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
    border: 1px solid white;
    border-radius: 10px;
    background-color: var(--primary-color-light);

`;

export const ToggelOverlay = styled.div`
    display: flex;
    background-color: white;
    width: 35px;
    height: 29px;
    border: 1px solid white;
    border-radius: 8px;
    margin-left: 2px;
`;

