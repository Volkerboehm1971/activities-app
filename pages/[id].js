import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledLinkHomePage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #3e407d;
  border: 5px solid #3e407d;
  border-radius: 5px;
  margin-top: 500px;
  margin-left: 30px;
  font-size: 17px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  margin-top: 2.7rem;
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

export default function ActivityCardDetails({ activities }) {
  const router = useRouter();
  const { id } = router.query;

  const detailActivity = activities.find((activity) => activity.id === id);

  if (!detailActivity) {
    return null;
  }

  return (
    <>
      <StyledHeadline>Details of Activity</StyledHeadline>
      <StyledLinkHomePage href="/">← Back</StyledLinkHomePage>

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
