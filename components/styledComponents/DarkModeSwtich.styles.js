import styled from "styled-components";
import Image from "next/image"

export const Container = styled.div`
    display: flex;
`;

export const ImageSun = styled(Image)`
    display: flex;
    z-index: 3;
`;

export const ImageMoon = styled(Image)`
    position: absolute;
    right: 2px;
    z-index: 3;
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

    &:hover{
        cursor: pointer;
    }
`;

export const ToggelOverlay = styled.div`
    position: absolute;
    right: 2px;
    background-color: white;
    width: 35px;
    height: 29px;
    /* border: 1px solid white; */
    border-radius: 8px;
    margin-left: 2px;
    z-index: 2;
`;

