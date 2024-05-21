import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const LinkActivityList = styled(Link)`
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

export const LinkAndBookmarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 26px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  margin-top: 2rem;
  max-height: 1000px;
`;

export const DetailImageContainer = styled.div`
  border-radius: 13px;
  overflow: hidden;
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
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const Info = styled.p`
  font-size: small;
  margin-top: 0.3rem;
`;

export const Article = styled.p`
  line-height: 1.4;
  font-size: small;
  margin-top: 0.7rem;
  padding-right: 1.5rem;
`;

export const AreaCountyContainer = styled.div`
  display: flex;
  color: grey;
  font-weight: 400;
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;
  margin-bottom: 70px;
`;

export const ButtonDelete = styled.button`
  margin: 15px 0 15px 0;
  text-decoration: none;
  color: #ffffff;
  background-color: #ed3021;
  border: 7px solid #ed3021;
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
  background-color: #4caf50;
  border: 7px solid #4caf50;
  border-radius: 5px;
  font-size: 18px;
  width: 75px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
