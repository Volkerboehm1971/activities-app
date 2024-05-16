import useSWR from "swr";
import {
  WeatherSection,
  Area,
  Temperature,
  WeatherIcon,
  Error,
  Span,
} from "./styledComponents/WeatherDisplay.styles";

const API = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function WeatherDisplay({ area, lat, lng }) {
  const { data: weather } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API}`
  );

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {weather.weather ? (
        <WeatherSection>
          <Area>{area}</Area>
          <WeatherIcon
            alt="weather"
            src={`weatherIcons/${weather.weather[0].icon}.png`}
          />
          <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
        </WeatherSection>
      ) : (
        <Error>
          No weather data available for: <br />
          <Span>{area}</Span>
        </Error>
      )}
    </>
  );
}
