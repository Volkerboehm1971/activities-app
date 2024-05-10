import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DetailMap = dynamic(() => import("./DetailMap"), { ssr: false });

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
  max-height: 1000px;
`;

const StyledImageDiv = styled.div`
  position: relative;
  margin-top: 0.5rem;
  height: 200px;
`;

const StyledTitle = styled.h3`
  font-size: large;
  margin-top: 13px;
  margin-bottom: 0;
`;

const StyledDiv = styled.div`
  margin-top: 0.5rem;
`;

const StyledImage = styled(Image)`
  border-radius: 13px;
  object-fit: cover;
`;

const StyledSubheader = styled.h3`
  font-size: 15px;
  margin-top: 8px;
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

const StyledAreaCountyContainer = styled.div`
  display: flex;
  color: grey;
  font-weight: 400;
`;

const StyledButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;
  margin-bottom: 70px;
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
  id,
}) {
  const router = useRouter();
  console.log(detailActivity);
  return (
    <>
      <StyledHeadline>Details of Activity</StyledHeadline>
      <StyledLinkHomePage href="/">← Back</StyledLinkHomePage>
      <StyledSection>
        <StyledImageDiv>
          <StyledImage
            src={detailActivity.image}
            fill
            alt="hiker on a mountain"
          />
        </StyledImageDiv>

        <StyledTitle>{detailActivity.title}</StyledTitle>

        <StyledDiv>
          <StyledSubheader>Description</StyledSubheader>
          <StyledArticle>{detailActivity.description}</StyledArticle>
        </StyledDiv>

        <StyledAreaCountyContainer>
          <StyledDiv>
            <StyledInfo>
              {detailActivity.area}, {detailActivity.country}
            </StyledInfo>
          </StyledDiv>
        </StyledAreaCountyContainer>
        <DetailMap
          longitude={detailActivity.lng}
          latitude={detailActivity.lat}
        ></DetailMap>
      </StyledSection>
      <StyledButtonContainer>
        <StyledButtonEdit
          type="button"
          onClick={() => router.push(`/${id}/edit`)}
        >
          Edit
        </StyledButtonEdit>
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
