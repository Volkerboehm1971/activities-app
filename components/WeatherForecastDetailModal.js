import React from "react";
import styled from "styled-components";
import WeekdayFromDateString from "./WeekdayFromDateString";

const WeatherForecastField = styled.section`
  margin: 12px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 35px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledTd = styled.td`
  text-align: center;
  vertical-align: middle;
  font-weight: 600;
  font-size: 12px;
`;

const Td = styled.td`
  text-align: center;
  padding: 8px;
  vertical-align: middle;
`;

export default function WeatherForecastModal({
  filteredWeatherMorning,
  filteredWeatherAfternoon,
  filteredWeatherEvening,
  onClickButton,
}) {
  return (
    <WeatherForecastField>
      <h2>Weather Forecast</h2>
      <Table>
        <tbody>
          <tr>
            <StyledTd>6am</StyledTd>
            {filteredWeatherMorning.slice(0, 4).map((weather, index) => (
              <Td key={index}>
                <Column>
                  <WeekdayFromDateString dateString={weather.dt_txt} />
                  <StyledImage
                    alt="WeatherMorning"
                    src={`weatherIcons/${weather.weather[0].icon}.png`}
                  />
                  <p>{Math.round(weather.main.temp)}°C</p>
                  <p>Wind</p>
                  <p>{weather.wind.speed} m/s</p>
                </Column>
              </Td>
            ))}
          </tr>
          <tr>
            <Td>12am</Td>
            {filteredWeatherAfternoon.slice(0, 4).map((weather, index) => (
              <Td key={index}>
                <Column>
                  <StyledImage
                    alt="WeatherAfternoon"
                    src={`weatherIcons/${weather.weather[0].icon}.png`}
                  />
                  <p>{Math.round(weather.main.temp)}°C</p>
                  <p>Wind</p>
                  <p>{weather.wind.speed} m/s</p>
                </Column>
              </Td>
            ))}
          </tr>
          <tr>
            <Td>18pm</Td>
            {filteredWeatherEvening.slice(0, 4).map((weather, index) => (
              <Td key={index}>
                <Column>
                  <StyledImage
                    alt="WeatherEvening"
                    src={`weatherIcons/${weather.weather[0].icon}.png`}
                  />
                  <p>{Math.round(weather.main.temp)}°C</p>
                  <p>Wind</p>
                  <p>{weather.wind.speed} m/s</p>
                </Column>
              </Td>
            ))}
          </tr>
        </tbody>
      </Table>
      <button onClick={onClickButton}>More Weather Information</button>
    </WeatherForecastField>
  );
}
