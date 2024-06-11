import styled from "styled-components";
import Image from "next/image";

export const Article = styled.article`
  position: relative;
  height: 360px;
  width: 335px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);


  @media only screen and (min-width: 550px){
    width: 500px;
    height: 0 auto;}

  @media only screen and (min-width: 1000px){
    width: 700px;
  }
`;

export const SpotlightActivityContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const SpotlightImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.p`
  margin: 0 0 0 15px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

export const Area = styled.p`
  margin: 7px 0 10px 15px;
  font-size: 13px;
  font-weight: semibold;
  letter-spacing: 0.3px;
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
