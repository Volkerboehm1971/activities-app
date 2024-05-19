import styled from "styled-components";

export const WeatherForecastField = styled.section`
  margin: 12px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const DisplayedDaysContainer = styled.div`
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DisplayedDay = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

export const Date = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
`;

export const Daytime = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 12px;
`;

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
