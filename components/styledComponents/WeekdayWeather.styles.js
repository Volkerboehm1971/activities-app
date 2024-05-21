import styled from "styled-components";

export const WeatherDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
`;

export const WeatherIcon = styled.img`
  width: 55px;
`;

export const Temperature = styled.p`
  padding: 6px;
  margin: 0;
  font-size: 12px;
  font-weight: 800;
`;

export const Windspeed = styled.p`
  padding: 6px;
  margin: 0;
  font-size: 12px;
`;
