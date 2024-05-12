import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Headline = styled.h1`
  text-align: center;
`;

export const LinkHomePage = styled(Link)`
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  margin-top: 2rem;
  max-height: 1000px;
`;

export const ImageDiv = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 200px;
`;

export const Title = styled.h3`
  font-size: large;
  margin-top: 13px;
  margin-bottom: 0;
`;

export const Div = styled.div`
  margin-top: 0.5rem;
`;

export const DetailImage = styled(Image)`
  border-radius: 13px;
  object-fit: cover;
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
`;

export const ButtonEdit = styled.button`
  margin: 15px 0 15px 0;
  text-decoration: none;
  color: #ffffff;
  background-color: #4caf50;
  border: 7px solid #4caf50;
  border-radius: 5px;
  font-size: 18px;
  width: 75px;
`;
