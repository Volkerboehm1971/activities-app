import styled from "styled-components";
import { Devices } from "./Devices.styles";

export const WeatherForecastField = styled.section`
  margin: 25px 32px 10px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (${Devices.xl}){
    margin-top: 40px;
    margin-bottom: 40px;
    transform: scale(1.2);}
`;

export const WeatherHeadline = styled.h2`
  font-weight: 600;
  margin-left: 5px;
  margin-bottom: 0;
`;

export const ThreeDaysContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px 0 15px;
`;

export const DisplayedDayDetailsPage = styled.p`
  font-size: 14px;
  font-weight: 450;
  margin: 0;
`;

export const WeatherIconDetailsPage = styled.img`
  width: 65px;
`;

export const TemperatureDetailsPage = styled.p`
  margin: 0;
  font-weight: 450;
  font-size: 14px;
`;

export const ModalContainer = styled.section`
  margin-top: 25px;
  border-radius: 5px;
  width: 175px;
  padding: 10px;
  background-color: #f0f0f0;
  font-size: 12px;
  font-weight: 600;
  text-align: center;



  &:hover{
    background-color: #D4D4D4;
    cursor: pointer;
  }
`;

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const StyledDiv = styled.div`
  width: 350px;
  height: 550px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
`;

export const ModalOpenButton = styled.button`
  all: unset;
`;
