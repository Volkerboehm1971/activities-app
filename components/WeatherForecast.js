import { useState } from "react";
import useSWR from "swr";
import WeekdayFromDateString from "./WeekdayFromDateString";
import WeatherForecastModal from "./WeatherForecastModal";
import { filterWeatherByHour } from "../utils/filterWeatherData";
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

export default function WeatherForecast({ detailActivity }) {
  const [showWeatherForecastModal, setShowWeatherForecastModal] =
    useState(false);

  const { data: weather, isLoading } = useSWR(
    detailActivity.lat &&
      `/api/weather/?lat=${detailActivity.lat}&lng=${detailActivity.lng}`
  );

  if (isLoading) return <p>Loading...</p>;

  const filteredWeatherMorning = filterWeatherByHour(weather.hourly, 6);
  const filteredWeatherAfternoon = filterWeatherByHour(weather.hourly, 12);
  const filteredWeatherEvening = filterWeatherByHour(weather.hourly, 18);

  return (
    filteredWeatherAfternoon.length > 0 && (
      <>
        <WeatherForecastField>
          <WeatherHeadline>3 Day Weather Forecast</WeatherHeadline>
          <ThreeDaysContainer>
            {filteredWeatherAfternoon.map((item, index) => (
              <DayContainer key={index}>
                <DisplayedDayDetailsPage>
                  <WeekdayFromDateString
                    dateString={new Date(item.dt * 1000).toISOString()}
                  />
                </DisplayedDayDetailsPage>
                <WeatherIconDetailsPage
                  alt="WeatherToday"
                  src={`weatherIcons/${item.weather[0].icon}.png`}
                />
                <TemperatureDetailsPage>
                  {Math.round(item.temp)}°C
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
