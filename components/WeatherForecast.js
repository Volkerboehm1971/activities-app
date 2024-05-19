import {
  WeatherForecastField,
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

const API = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function WeatherForecast({ detailActivity }) {
  const [filteredWeatherMorning, setFilteredWeatherMorning] = useState([]);
  const [filteredWeatherAfternoon, setFilteredWeatherAfternoon] = useState([]);
  const [filteredWeatherEvening, setFilteredWeatherEvening] = useState([]);
  const [showWeatherForecastModal, setShowWeatherForecastModal] =
    useState(false);

  const { data: weather } = useSWR(
    detailActivity.lat &&
      `https://api.openweathermap.org/data/2.5/forecast?lat=${detailActivity.lat}&lon=${detailActivity.lng}&units=metric&appid=${API}`
  );

  useEffect(() => {
    if (weather && weather.list) {
      const filteredWeather = filterWeatherData(weather.list);
      setFilteredWeatherMorning(
        filterWeatherByTime(filteredWeather, "06:00:00")
      );
      setFilteredWeatherAfternoon(
        filterWeatherByTime(filteredWeather, "12:00:00")
      );
      setFilteredWeatherEvening(
        filterWeatherByTime(filteredWeather, "18:00:00")
      );
    }
  }, [weather]);

  // Due to the structure of the weatherObjectArray(the starting point index [0] can vary, for example it can start with a 08:00:00 weather forecast or with a 21:00:00 weather forecast), it is necessary to filter the weatherObjectArray to ensure that the new data includes complete daily weather information. Otherwise, the weather display would lack consistency.
  function filterWeatherData(weatherList) {
    const StartingDay = weatherList.findIndex((weatherItem) =>
      weatherItem.dt_txt.endsWith("06:00:00")
    );
    return weatherList.slice(StartingDay);
  }

  function filterWeatherByTime(weatherList, time) {
    return weatherList.filter((weatherItem) =>
      weatherItem.dt_txt.endsWith(time)
    );
  }

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    filteredWeatherAfternoon.length > 0 && (
      <>
        <WeatherForecastField>
          <WeatherHeadline>3-Day Weather Forecast</WeatherHeadline>
          <ThreeDaysContainer>
            {filteredWeatherAfternoon.slice(0, 3).map((weather, index) => (
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
            <div
              onClick={() =>
                setShowWeatherForecastModal(!showWeatherForecastModal)
              }
            >
              More Weather Information
            </div>
          </ModalContainer>
        </WeatherForecastField>
        {showWeatherForecastModal && (
          <Overlay
            onClick={() =>
              setShowWeatherForecastModal(!showWeatherForecastModal)
            }
          >
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
