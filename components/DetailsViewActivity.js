import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledLinkHomePage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #3e407d;
  border: 5px solid #3e407d;
  border-radius: 5px;
  margin-left: 30px;
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  margin-top: 2rem;
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

const StyledInfo = styled.p`
  font-size: small;
  margin-top: 0.3rem;
`;

const StyledArticle = styled.p`
  line-height: 1.4;
  font-size: small;
  margin-top: 0.7rem;
  padding-right: 1.5rem;
`;

const StyledButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

const StyledButtonDelete = styled.button`
  margin: 15px 0 15px 0;
  text-decoration: none;
  color: #ffffff;
  background-color: #ed3021;
  border: 7px solid #ed3021;
  border-radius: 5px;
  font-size: 18px;
  width: 75px;
`;

const StyledButtonEdit = styled.button`
  margin: 15px 0 15px 0;
  text-decoration: none;
  color: #ffffff;
  background-color: #4caf50;
  border: 7px solid #4caf50;
  border-radius: 5px;
  font-size: 18px;
  width: 75px;
`;

export default function DetailsViewActivity({
  detailActivity,
  isDeleteMode,
  setIsDeleteMode,
}) {
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
          <StyledInfo>{detailActivity.title}</StyledInfo>
        </StyledDiv>

        <StyledDiv>
          <StyledSubheader>Area</StyledSubheader>
          <StyledInfo> {detailActivity.area}</StyledInfo>
        </StyledDiv>

        <StyledDiv>
          <StyledSubheader>Country</StyledSubheader>
          <StyledInfo> {detailActivity.country}</StyledInfo>
        </StyledDiv>

        <StyledDiv>
          <StyledSubheader>Description</StyledSubheader>
          <StyledArticle>{detailActivity.description}</StyledArticle>
        </StyledDiv>
      </StyledSection>
      <StyledButtonContainer>
        <StyledButtonEdit type="button">Edit</StyledButtonEdit>
        <StyledButtonDelete
          type="button"
          onClick={() => setIsDeleteMode(!isDeleteMode)}
        >
          Delete
        </StyledButtonDelete>
      </StyledButtonContainer>
    </>
  );
}
