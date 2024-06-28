import styled from "styled-components";
import Image from "next/image"

export const ModalContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 100px;
    right: 15px;
    width: 60px;
    height: 35px;
    border: 1px solid white;
    border-radius: 12px;
    background-color: var(--primary-color-light);
`;

export const ImageSun = styled(Image)`
    display: flex;
`;

export const ImageMoon = styled(Image)`
    display: flex;
    margin-top: 4px;
`;