import {
  WeatherForecastModalField,
  ModalCloseButton,
  Table,
  DisplayedDaysContainer,
  DisplayedDay,
  Date,
  Daytime,
} from "./styledComponents/WeatherForecasModal.styles";
import WeekdayFromDateString from "./WeekdayFromDateString";
import WeekdayWeather from "./WeekdayWeather";

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
    <>
      <WeatherForecastModalField>
        <ModalCloseButton onClick={onClickButton}>x</ModalCloseButton>
        <Table>
          <tbody>
            <td>
              {/*because of space issues and of the everchanging WeatherArray, the filteredWeatherArrays will only be mapped to the third day  */}
              {filteredWeatherMorning.map((weekday, index) => (
                <DisplayedDaysContainer key={weekday.dt_txt}>
                  <DisplayedDay>
                    <WeekdayFromDateString dateString={weekday.dt_txt} />
                  </DisplayedDay>
                  <Date>{dates[index]}</Date>
                </DisplayedDaysContainer>
              ))}
            </td>
            <td>
              <Daytime>6am</Daytime>
              <WeekdayWeather filteredWeatherWeekday={filteredWeatherMorning} />
            </td>
            <td>
              <Daytime>12am</Daytime>
              <WeekdayWeather
                filteredWeatherWeekday={filteredWeatherAfternoon}
              />
            </td>
            <td>
              <Daytime>18pm</Daytime>
              <WeekdayWeather filteredWeatherWeekday={filteredWeatherEvening} />
            </td>
          </tbody>
        </Table>
      </WeatherForecastModalField>
    </>
  );
}
