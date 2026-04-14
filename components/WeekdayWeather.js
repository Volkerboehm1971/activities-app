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
      {filteredWeatherWeekday.map((item) => (
        <WeatherDataContainer key={item.dt}>
          <WeatherIcon
            alt="Weatherdata"
            src={`weatherIcons/${item.weather[0].icon}.png`}
          />
          <Temperature>{Math.round(item.temp)}°C</Temperature>
          <ArrowIcon degree={item.wind_deg} />
          <Windspeed>{item.wind_speed} m/s</Windspeed>
        </WeatherDataContainer>
      ))}
    </>
  );
}
