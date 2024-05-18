import { useState, useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";
import WeekdayFromDateString from "./WeekdayFromDateString";

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const WeatherForecastField = styled.section`
  margin: 32px;
`;

const ContainerContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledImage = styled.img`
  width: 50px;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const API = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function WeatherForecast({ detailActivity }) {
  const [filteredWeather, setFilteredWeather] = useState([]);

  const { data: weather } = useSWR(
    detailActivity.lat &&
      `https://api.openweathermap.org/data/2.5/forecast?lat=${detailActivity.lat}&lon=${detailActivity.lng}&units=metric&lang=de&appid=${API}`
  );

  useEffect(() => {
    if (weather && weather.list) {
      filterWeatherByTime();
    }
  }, [weather]);

  if (!weather) {
    return <p>Loading...</p>;
  }

  const filterWeatherByTime = () => {
    const filteredData = weather.list.filter((weatherItem) =>
      weatherItem.dt_txt.endsWith("15:00:00")
    );
    setFilteredWeather(filteredData);
  };
  console.log(filteredWeather);

  return (
    filteredWeather.length > 0 && (
      <>
        <WeatherForecastField>
          <h2>Weather Forecast</h2>
          <ContainerContainer>
            <DayContainer>
              <WeekdayFromDateString dateString={filteredWeather[0].dt_txt} />
              <StyledImage
                alt="WeatherToday"
                src={`weatherIcons/${filteredWeather[0].weather[0].icon}.png`}
              />
              <p>{Math.round(filteredWeather[0].main.temp)}°C</p>
              <p></p>
            </DayContainer>
            <DayContainer>
              <WeekdayFromDateString dateString={filteredWeather[1].dt_txt} />
              <StyledImage
                alt="WeatherToday"
                src={`weatherIcons/${filteredWeather[1].weather[0].icon}.png`}
              />
              <p>{Math.round(filteredWeather[1].main.temp)}°C</p>
            </DayContainer>
            <DayContainer>
              <WeekdayFromDateString dateString={filteredWeather[2].dt_txt} />
              <StyledImage
                alt="WeatherToday"
                src={`weatherIcons/${filteredWeather[2].weather[0].icon}.png`}
              />
              <p>{Math.round(filteredWeather[2].main.temp)}°C</p>
            </DayContainer>
            <DayContainer>
              <WeekdayFromDateString dateString={filteredWeather[3].dt_txt} />
              <StyledImage
                alt="WeatherToday"
                src={`weatherIcons/${filteredWeather[3].weather[0].icon}.png`}
              />
              <p>{Math.round(filteredWeather[3].main.temp)}°C</p>
            </DayContainer>
            <DayContainer>
              <WeekdayFromDateString dateString={filteredWeather[4].dt_txt} />
              <StyledImage
                alt="WeatherToday"
                src={`weatherIcons/${filteredWeather[4].weather[0].icon}.png`}
              />
              <p>{Math.round(filteredWeather[4].main.temp)}°C</p>
            </DayContainer>
          </ContainerContainer>
        </WeatherForecastField>
      </>
    )
  );
}
