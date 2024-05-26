import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const LinkActivityList = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #0079C2;
  /* border: 5px solid #3e407d; */
  border-radius: 5px;
  margin-left: 30px;
  font-size: 15px;
  font-weight: 300;
  padding: 4px 7px 0px 5px;
  vertical-align: middle;
`;

export const LinkAndBookmarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 26px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  margin-top: 2rem;
  max-height: 1000px;
`;

export const DetailImageContainer = styled.div`
  border-radius: 13px;
  overflow: hidden;
  margin-top: 0;
`;

export const DetailImage = styled(Image)`
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: large;
  margin-top: 13px;
  margin-bottom: 0;
`;

export const Div = styled.div`
  margin-top: 0.5rem;
`;

export const Subheader = styled.h3`
  font-size: 1rem;
  margin-top: 2px;
  margin-bottom: 0;
  font-weight: 500;
`;

export const Info = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  margin-top: 0.3rem;
  margin-bottom: 0;
`;

export const Article = styled.p`
  line-height: 1.4;
  margin-top: 0.7rem;
  padding-right: 1.5rem;
  font-weight: 170;
  letter-spacing: 0.5px;
  font-size: 0.75rem;
`;

export const AreaCountyContainer = styled.div`
  display: flex;
  color: grey;
  font-weight: 400;
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
  margin-bottom: 70px;
`;

export const ButtonDelete = styled.button`
  margin: 15px 0 15px 0;
  text-decoration: none;
  color: #ffffff;
  background-color: #F23E2E;
  border: 7px solid #F23E2E;
  border-radius: 5px;
  font-size: 18px;
  width: 75px;

  &:hover {
    cursor: pointer;
  }
`;

export const LinkEdit = styled(Link)`
  margin: 15px 0 15px 0;
  text-decoration: none;
  color: #ffffff;
  background-color: #85CCE1;
  border: 7px solid #85CCE1;
  border-radius: 5px;
  font-size: 18px;
  width: 75px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
