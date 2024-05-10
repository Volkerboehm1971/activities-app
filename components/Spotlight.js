import styled from "styled-components";
import Image from "next/image";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  margin: 0px 20px 0 20px;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
`;

const H2 = styled.h2`
  text-align: center;
`;

export default function Spotlight({ title, area, image }) {
  return (
    <>
      <StyledArticle>
        <H2>Random Activity</H2>
        <p>{title}</p>
        <StyledImage src={image} width={281.25} height={210.75} alt="" />
        <p>{area}</p>
      </StyledArticle>
    </>
  );
}
