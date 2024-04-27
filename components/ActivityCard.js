import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:active {
  color: black;
}
`

const StyledImage = styled(Image)`
      border-radius: 13px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

const StyledTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  margin-top: 10px;
`;

const StyledArea = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  margin-top: 10px;
  padding-top: 2.5px;
`;

export default function ActivityCard({ id, image, title, area }) {

  return (
    <>
      <StyledLink href={`/${id}`}>
      <StyledImage src={image} width={187.5} height={140.5} alt="" />
      <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledArea>{area}</StyledArea>
      </StyledDiv>
      </StyledLink>
    </>
  );
}
