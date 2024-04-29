import styled from "styled-components";
import Image from "next/image";
import { activities } from "@/lib/dummydata";
import { useRouter } from "next/router";
import Link from "next/link";

const StyledHeadline = styled.h2`
  text-align: center;
`;

const StyledButton = styled.button`

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: absolute;
  left: 8%;
  padding: 1% 3%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  margin-top: 3.9rem;
  max-height: 500px;
`;
const StyledDiv = styled.div`
  margin-top: 0.5rem;
`;

const StyledImage = styled(Image)`
  display: flex;
  align-self: flex-start;
  margin-bottom: 2rem;
  border-radius: 13px;
`;

const StyledSubheader = styled.h3`
  font-size: medium;
  margin-top: 0;
  margin-bottom: 0;
`;

const Styledinfo = styled.p`
font-size: small; 
margin-top: 0.3rem;
`;

const Styledarticle = styled.p`
  line-height: 1.4;
  font-size: small;
  margin-top: 0.7rem;
  /* text-align: justify; */
  padding-right: 1.5rem;
`;

export default function ActivityCardDetails() {
  const router = useRouter();
  const { id } = router.query;

  const detailActivity = activities.find((activity) => activity.id === id);

  if (!detailActivity) {
    return null;
  }

  return (
    <>
      <StyledHeadline>Details of Activity</StyledHeadline>
      <StyledLink href="/">Back</StyledLink>

      <StyledSection>
        <StyledDiv>
          <StyledImage
            src={detailActivity.image}
            width={187.5}
            height={140.5}
            alt="hiker on a mountain"
          />
          <StyledSubheader>Type of Activity</StyledSubheader>
          <Styledinfo>{detailActivity.title}</Styledinfo>
        </StyledDiv>

        <StyledDiv>
          <StyledSubheader>Area</StyledSubheader>
          <Styledinfo> {detailActivity.area}</Styledinfo>
        </StyledDiv>

        <StyledDiv>
          <StyledSubheader>Country</StyledSubheader>
          <Styledinfo> {detailActivity.country}</Styledinfo>
        </StyledDiv>

        <StyledDiv>
          <StyledSubheader>Description</StyledSubheader>
          <Styledarticle>{detailActivity.description}</Styledarticle>
        </StyledDiv>
      </StyledSection>
    </>
  );
}
