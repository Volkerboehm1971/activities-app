import {
  WeatherForecastField,
  Table,
  DisplayedDaysContainer,
  DisplayedDay,
  Date,
  Daytime,
  WeatherDataContainer,
  WeatherIcon,
  Temperature,
  Windspeed,
} from "./styledComponents/WeatherForecastDetailModal.styles";
import WeekdayFromDateString from "./WeekdayFromDateString";
import ArrowIcon from "./icons/ArrowWeatherIcon";

export default function WeatherForecastModal({
  filteredWeatherMorning,
  filteredWeatherAfternoon,
  filteredWeatherEvening,
  onClickButton,
}) {
  // extracting the dates from the date-time-String with help of the static end value "06:00:00"
  const dates = filteredWeatherMorning
    .filter((date) => date.dt_txt.endsWith("06:00:00"))
    .map((date) => date.dt_txt.split(" ")[0]);

  return (
    <WeatherForecastField>
      <Table>
        <tbody>
          <td>
            {/*because of space issues and of the everchanging WeatherArray, the filteredWeatherArrays will only be mapped to the third day  */}
            {filteredWeatherMorning.slice(0, 3).map((weekday, index) => (
              <DisplayedDaysContainer key={index}>
                <DisplayedDay>
                  <WeekdayFromDateString dateString={weekday.dt_txt} />
                </DisplayedDay>
                <Date>{dates[index]}</Date>
              </DisplayedDaysContainer>
            ))}
          </td>
          <td>
            <Daytime>6am</Daytime>
            {filteredWeatherMorning.slice(0, 3).map((weather, index) => (
              <WeatherDataContainer key={index}>
                <WeatherIcon
                  alt="Weatherdata for Morning"
                  src={`weatherIcons/${weather.weather[0].icon}.png`}
                />
                <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
                <ArrowIcon deg={weather.wind.deg} />
                <Windspeed>{weather.wind.speed} m/s</Windspeed>
              </WeatherDataContainer>
            ))}
          </td>
          <td>
            <Daytime>12am</Daytime>
            {filteredWeatherAfternoon.slice(0, 3).map((weather, index) => (
              <WeatherDataContainer key={index}>
                <WeatherIcon
                  alt="Weatherdata for Afternoon"
                  src={`weatherIcons/${weather.weather[0].icon}.png`}
                />
                <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
                <ArrowIcon deg={weather.wind.deg} />
                <Windspeed>{weather.wind.speed} m/s</Windspeed>
              </WeatherDataContainer>
            ))}
          </td>
          <td>
            <Daytime>18pm</Daytime>
            {filteredWeatherEvening.slice(0, 3).map((weather, index) => (
              <WeatherDataContainer key={index}>
                <WeatherIcon
                  alt="Weatherdata for Evening"
                  src={`weatherIcons/${weather.weather[0].icon}.png`}
                />
                <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
                <ArrowIcon deg={weather.wind.deg} />
                <Windspeed>{weather.wind.speed} m/s</Windspeed>
              </WeatherDataContainer>
            ))}
          </td>
        </tbody>
      </Table>
    </WeatherForecastField>
  );
}
