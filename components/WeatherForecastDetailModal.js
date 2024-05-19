import React from "react";
import styled from "styled-components";
import WeekdayFromDateString from "./WeekdayFromDateString";
import ArrowIcon from "./icons/ArrowWeatherIcon";

const WeatherForecastField = styled.section`
  margin: 12px;
`;

const StyledWeekendDays = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

const Date = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
`;

const WeekendDiv = styled.div`
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeadline = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 12px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
`;

const StyledImage = styled.img`
  width: 55px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledTd = styled.td`
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  font-size: 14px;
  width: 30px;
`;

const Td = styled.td`
  text-align: center;
  padding: 4px 8px 4px 8px;
  vertical-align: middle;
`;

const StyledP = styled.p`
  padding: 6px;
  margin: 0;
  font-size: 12px;
`;

export default function WeatherForecastModal({
  filteredWeatherMorning,
  filteredWeatherAfternoon,
  filteredWeatherEvening,
  onClickButton,
}) {
  const dates = filteredWeatherMorning
    .filter((date) => date.dt_txt.endsWith("06:00:00"))
    .map((date) => date.dt_txt.split(" ")[0]);

  console.log(dates);

  //   return (
  //     <WeatherForecastField>
  //       <Table>
  //         <tbody>
  //           <StyledHeadline>
  //             <StyledTd></StyledTd>
  //             {filteredWeatherMorning.slice(0, 3).map((weather, index) => (
  //               <Td key={index}>
  //                 <WeekdayFromDateString dateString={weather.dt_txt} />
  //               </Td>
  //             ))}
  //           </StyledHeadline>
  //           <tr>
  //             <StyledTd>6am</StyledTd>
  //             {filteredWeatherMorning.slice(0, 3).map((weather, index) => (
  //               <Td key={index}>
  //                 <Column>
  //                   <StyledImage
  //                     alt="WeatherMorning"
  //                     src={`weatherIcons/${weather.weather[0].icon}.png`}
  //                   />
  //                   <StyledP>
  //                     <strong>{Math.round(weather.main.temp)}°C</strong>
  //                   </StyledP>
  //                   <StyledP>Wind</StyledP>
  //                   <StyledP>{weather.wind.speed} m/s</StyledP>
  //                 </Column>
  //               </Td>
  //             ))}
  //           </tr>
  //           <tr>
  //             <StyledTd>12am</StyledTd>
  //             {filteredWeatherAfternoon.slice(0, 3).map((weather, index) => (
  //               <Td key={index}>
  //                 <Column>
  //                   <StyledImage
  //                     alt="WeatherAfternoon"
  //                     src={`weatherIcons/${weather.weather[0].icon}.png`}
  //                   />
  //                   <StyledP>
  //                     <strong>{Math.round(weather.main.temp)}°C</strong>
  //                   </StyledP>

  //                   <ArrowIcon deg={weather.wind.deg} />

  //                   <StyledP>{weather.wind.speed} m/s</StyledP>
  //                 </Column>
  //               </Td>
  //             ))}
  //           </tr>
  //           <tr>
  //             <StyledTd>18pm</StyledTd>
  //             {filteredWeatherEvening.slice(0, 3).map((weather, index) => (
  //               <Td key={index}>
  //                 <Column>
  //                   <StyledImage
  //                     alt="WeatherEvening"
  //                     src={`weatherIcons/${weather.weather[0].icon}.png`}
  //                   />
  //                   <StyledP>
  //                     <strong>{Math.round(weather.main.temp)}°C</strong>
  //                   </StyledP>

  //                   <ArrowIcon deg={weather.wind.deg} />

  //                   <StyledP>{weather.wind.speed} m/s</StyledP>
  //                 </Column>
  //               </Td>
  //             ))}
  //           </tr>
  //         </tbody>
  //       </Table>
  //     </WeatherForecastField>
  //   );
  // }

  return (
    <WeatherForecastField>
      <Table>
        <tbody>
          <td>
            {filteredWeatherMorning.slice(0, 3).map((weekday, index) => (
              <WeekendDiv key={index}>
                <StyledWeekendDays>
                  <WeekdayFromDateString dateString={weekday.dt_txt} />
                </StyledWeekendDays>
                <Date>{dates[index]}</Date>
              </WeekendDiv>
            ))}
          </td>
          <td>
            <StyledHeadline>6am</StyledHeadline>
            {filteredWeatherMorning.slice(0, 3).map((weather, index) => (
              <>
                <Column key={index}>
                  <StyledImage
                    alt="WeatherAfternoon"
                    src={`weatherIcons/${weather.weather[0].icon}.png`}
                  />
                  <StyledP>
                    <strong>{Math.round(weather.main.temp)}°C</strong>
                  </StyledP>
                  <ArrowIcon deg={weather.wind.deg} />
                  <StyledP>{weather.wind.speed} m/s</StyledP>
                </Column>
              </>
            ))}
          </td>
          <td>
            <StyledHeadline>12am</StyledHeadline>
            {filteredWeatherAfternoon.slice(0, 3).map((weather, index) => (
              <>
                <Column key={index}>
                  <StyledImage
                    alt="WeatherAfternoon"
                    src={`weatherIcons/${weather.weather[0].icon}.png`}
                  />
                  <StyledP>
                    <strong>{Math.round(weather.main.temp)}°C</strong>
                  </StyledP>
                  <ArrowIcon deg={weather.wind.deg} />
                  <StyledP>{weather.wind.speed} m/s</StyledP>
                </Column>
              </>
            ))}
          </td>
          <td>
            <StyledHeadline>18pm</StyledHeadline>
            {filteredWeatherEvening.slice(0, 3).map((weather, index) => (
              <>
                <Column key={index}>
                  <StyledImage
                    alt="WeatherAfternoon"
                    src={`weatherIcons/${weather.weather[0].icon}.png`}
                  />
                  <StyledP>
                    <strong>{Math.round(weather.main.temp)}°C</strong>
                  </StyledP>
                  <ArrowIcon deg={weather.wind.deg} />
                  <StyledP>{weather.wind.speed} m/s</StyledP>
                </Column>
              </>
            ))}
          </td>
        </tbody>
      </Table>
    </WeatherForecastField>
  );
}
