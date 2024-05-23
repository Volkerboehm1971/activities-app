import styled from "styled-components";
import Image from "next/image";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  margin: 0px 20px 0 20px;
`;

export const SpotlightImage = styled(Image)`
  object-fit: cover;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
`;

export const Title = styled.h2`
  text-align: center;
`;
