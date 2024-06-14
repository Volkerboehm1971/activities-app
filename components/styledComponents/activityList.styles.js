import styled from "styled-components";
import Link from "next/link";
import { Devices } from "./Devices.styles";

export const LoadingAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 0 85px 0;
  margin: 0 2rem 0 2rem;

  @media only screen and (${Devices.xl}){
    display: grid;
    grid-template-columns: repeat(2, 280px);
    column-gap: 80px;
  }
`;

export const LinkDetailsPage = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:active {
    color: black;
  }
`;

export const Li = styled.li`
position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  list-style-type: none;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;


  @media only screen and (${Devices.xl}){
    margin-bottom: 40px;
  width: 100%;
  }
`;

export const LabelSearchField = styled.label`
  display: block;
  text-align: center;
  font-size: medium;
  font-weight: bold;
`;

export const WrapperSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputSearchField = styled.input`
  padding: 8px 8px 8px 40px;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' fill='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px;
  width: 310px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.p`
  color: #969A9E;
  font-size: 1rem;
  font-weight: 450;
  text-align: center;
  margin: 20 0 45 0;
`;

export const BookmarkContainer = styled.div`
  display: flex;
  position: absolute;
  right: 5px;
  top: 3px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
