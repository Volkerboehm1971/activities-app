import {
  WeatherDataContainer,
  WeatherIcon,
  Temperature,
  Windspeed,
} from "./styledComponents/WeekdayWeather.styles";
import ArrowIcon from "./icons/ArrowWeatherIcon";

export default function WeekdayWeather({ filteredWeatherWeekday }) {
  return (
    <>
      {filteredWeatherWeekday.map((weather) => (
        <WeatherDataContainer key={weather.dt_txt}>
          <WeatherIcon
            alt="Weatherdata for Afternoon"
            src={`weatherIcons/${weather.weather[0].icon}.png`}
          />
          <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
          <ArrowIcon degree={weather.wind.deg} />
          <Windspeed>{weather.wind.speed} m/s</Windspeed>
        </WeatherDataContainer>
      ))}
    </>
  );
}
