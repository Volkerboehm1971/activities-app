import styled from "styled-components";
import useSWR from "swr";

const WeatherSection = styled.section`
  margin: 40px 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Area = styled.p`
  font-size: 18px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

const Temperature = styled.p`
  font-size: 26px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

const WeatherIcon = styled.img`
  width: 90px;
`;

const Error = styled.p`
  margin: 40px 20px 50px;
  background-color: #ff6666;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledSpan = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;

const API = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function WeatherDisplay({ area }) {
  const { data: weather, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&appid=${API}`
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
          <StyledSpan>{area}</StyledSpan>
        </Error>
      )}
    </>
  );
}