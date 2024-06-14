import styled from "styled-components";
import Image from "next/image";
import { Devices } from "./Devices.styles";

export const Wrapper = styled.div`
  position: relative;
  width: 311px;
  height: 234px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media only screen and (${Devices.xl}){
    width: 280px;
    height: 211px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ActivityImage = styled(Image)`
  object-fit: cover;
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 15px;
  box-sizing: border-box;
  z-index: 2;
`;

export const Title = styled.p`
  margin: 0 0 0 15px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

export const Area = styled.p`
  margin: 7px 0 0 15px;
  font-size: 13px;
  font-weight: semibold;
  letter-spacing: 0.3px;
`;
