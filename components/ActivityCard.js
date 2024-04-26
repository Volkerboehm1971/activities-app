import styled from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
  /* object-fit: cover; */
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
`;

const StyledArea = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
`;

export default function ActivityCard({ image, title, area }) {
  return (
    <>
      <StyledImage src={image} width={187.5} height={140.5} alt="" />
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledArea>{area}</StyledArea>
      </StyledDiv>
    </>
  );
}
