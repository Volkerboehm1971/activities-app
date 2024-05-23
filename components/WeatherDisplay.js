import useSWR from "swr";
import {
  WeatherContainer,
  WeatherSection,
  Area,
  Temperature,
  WeatherIcon,
  Error,
  Span,
  WeatherLoadingContainer,
} from "./styledComponents/WeatherDisplay.styles";

export default function WeatherDisplay({ area, lat, lng }) {
  const { data: weather, error } = useSWR(
    lat && lng && `/api/weather/?lat=${lat}&lng=${lng}`
  );

  if (error) {
    return <p>Error</p>;
  }

  return (
    <WeatherContainer>
      {!weather ? (
        <WeatherLoadingContainer />
      ) : weather.list ? (
        <WeatherSection>
          <Area>{area}</Area>
          <WeatherIcon
            alt="weather"
            src={`weatherIcons/${weather.list[0].weather[0].icon}.png`}
          />
          <Temperature>{Math.round(weather.list[0].main.temp)}°C</Temperature>
        </WeatherSection>
      ) : (
        <Error>
          No weather data available for: <br />
          <Span>{area}</Span>
        </Error>
      )}
    </WeatherContainer>
  );
}
