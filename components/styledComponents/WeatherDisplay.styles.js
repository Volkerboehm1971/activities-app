import styled from "styled-components";
import { Devices } from "./Devices.styles";

export const WeatherContainer = styled.div`
  margin: 10px 20px 30px;
  width: 90%;
  @media only screen and (${Devices.xl}){
    width: 700px;
  }
`;

export const WeatherLoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const WeatherSection = styled.section`
  height: 100%;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Area = styled.p`
  font-size: 18px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

export const Temperature = styled.p`
  font-size: 26px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

export const WeatherIcon = styled.img`
  width: 90px;
`;

export const Error = styled.p`
  margin: 40px 20px 50px;
  background-color: #ff6666;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Span = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;
