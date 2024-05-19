import { useState, useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";
import WeekdayFromDateString from "./WeekdayFromDateString";
import WeatherForecastModal from "./WeatherForecastDetailModal";

const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StyledDiv = styled.div`
  width: 350px;
  height: 550px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
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
    const startIndex = weatherList.findIndex((weatherStartingDay) =>
      weatherStartingDay.dt_txt.endsWith("06:00:00")
    );
    return weatherList.slice(startIndex);
  }

  function filterWeatherByTime(weatherList, time) {
    return weatherList.filter((weatherItem) =>
      weatherItem.dt_txt.endsWith(time)
    );
  }

  if (!weather) {
    return <p>Loading...</p>;
  }
  console.log(weather);
  return (
    filteredWeatherAfternoon.length > 0 && (
      <>
        <WeatherForecastField>
          <ContainerContainer>
            {filteredWeatherAfternoon.slice(0, 3).map((weather, index) => (
              <DayContainer key={index}>
                <WeekdayFromDateString dateString={weather.dt_txt} />
                <StyledImage
                  alt="WeatherToday"
                  src={`weatherIcons/${weather.weather[0].icon}.png`}
                />
                <p>{Math.round(weather.main.temp)}°C</p>
              </DayContainer>
            ))}
          </ContainerContainer>
          <button
            onClick={() =>
              setShowWeatherForecastModal(!showWeatherForecastModal)
            }
          >
            More Weather Information
          </button>
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
