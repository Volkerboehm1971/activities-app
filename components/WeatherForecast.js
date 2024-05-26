import {
  filterWeatherData,
  filterWeatherByTime,
} from "../utils/filterWeatherData";
import {
  WeatherForecastField,
  ModalOpenButton,
  Overlay,
  StyledDiv,
  DisplayedDayDetailsPage,
  ThreeDaysContainer,
  WeatherIconDetailsPage,
  DayContainer,
  ModalContainer,
  TemperatureDetailsPage,
  WeatherHeadline,
} from "./styledComponents/WeatherForecast.styles";

import { useState, useEffect } from "react";
import useSWR from "swr";
import WeekdayFromDateString from "./WeekdayFromDateString";
import WeatherForecastModal from "./WeatherForecastModal";

export default function WeatherForecast({ detailActivity }) {
  const [showWeatherForecastModal, setShowWeatherForecastModal] =
    useState(false);

  const { data: weather, isLoading } = useSWR(
    detailActivity.lat &&
      `/api/weather/?lat=${detailActivity.lat}&lng=${detailActivity.lng}`
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredWeather = filterWeatherData(weather.list);

  const filteredWeatherMorning = filterWeatherByTime(
    filteredWeather,
    "06:00:00"
  ).slice(0, 3);
  const filteredWeatherAfternoon = filterWeatherByTime(
    filteredWeather,
    "12:00:00"
  ).slice(0, 3);
  const filteredWeatherEvening = filterWeatherByTime(
    filteredWeather,
    "18:00:00"
  ).slice(0, 3);

  return (
    filteredWeatherAfternoon.length > 0 && (
      <>
        <WeatherForecastField>
          <WeatherHeadline>3-Day Weather Forecast</WeatherHeadline>
          <ThreeDaysContainer>
            {filteredWeatherAfternoon.map((weather, index) => (
              <DayContainer key={index}>
                <DisplayedDayDetailsPage>
                  <WeekdayFromDateString dateString={weather.dt_txt} />
                </DisplayedDayDetailsPage>
                <WeatherIconDetailsPage
                  alt="WeatherToday"
                  src={`weatherIcons/${weather.weather[0].icon}.png`}
                />
                <TemperatureDetailsPage>
                  {Math.round(weather.main.temp)}°C
                </TemperatureDetailsPage>
              </DayContainer>
            ))}
          </ThreeDaysContainer>
          <ModalContainer>
            <ModalOpenButton
              onClick={() =>
                setShowWeatherForecastModal(!showWeatherForecastModal)
              }
            >
              More Weather Information
            </ModalOpenButton>
          </ModalContainer>
        </WeatherForecastField>
        {showWeatherForecastModal && (
          <Overlay>
            <StyledDiv>
              <WeatherForecastModal
                filteredWeatherAfternoon={filteredWeatherAfternoon}
                filteredWeatherMorning={filteredWeatherMorning}
                filteredWeatherEvening={filteredWeatherEvening}
                onClickButton={() =>
                  setShowWeatherForecastModal(!showWeatherForecastModal)
                }
              />
            </StyledDiv>
          </Overlay>
        )}
      </>
    )
  );
}
