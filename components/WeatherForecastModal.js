import {
  WeatherForecastModalField,
  ModalCloseButton,
  Table,
  DisplayedDaysContainer,
  DisplayedDay,
  DateW,
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
  const dates = filteredWeatherMorning.map((item) =>
    new Date(item.dt * 1000).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );

  return (
    <WeatherForecastModalField>
      <ModalCloseButton onClick={onClickButton}>x</ModalCloseButton>
      <Table>
        <tbody>
          <td>
            {filteredWeatherMorning.map((item, index) => (
              <DisplayedDaysContainer key={item.dt}>
                <DisplayedDay>
                  <WeekdayFromDateString
                    dateString={new Date(item.dt * 1000).toISOString()}
                  />
                </DisplayedDay>
                <DateW>{dates[index]}</DateW>
              </DisplayedDaysContainer>
            ))}
          </td>
          <td>
            <Daytime>6am</Daytime>
            <WeekdayWeather filteredWeatherWeekday={filteredWeatherMorning} />
          </td>
          <td>
            <Daytime>12pm</Daytime>
            <WeekdayWeather filteredWeatherWeekday={filteredWeatherAfternoon} />
          </td>
          <td>
            <Daytime>6pm</Daytime>
            <WeekdayWeather filteredWeatherWeekday={filteredWeatherEvening} />
          </td>
        </tbody>
      </Table>
    </WeatherForecastModalField>
  );
}
