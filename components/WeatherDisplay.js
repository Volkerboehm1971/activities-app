import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import useSWR from "swr";

const WeatherSection = styled.section`
  margin: 40px 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledArea = styled.p`
  font-size: 18px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

const StyledTemperature = styled.p`
  font-size: 26px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

const StyledImage = styled.img`
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
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function searchWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&appid=${API}`
        );

        if (!response.ok) {
          throw new Error("Could not fetch the data for that resource");
        }

        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error);
      }
    }

    searchWeather();
  }, [area]);

  if (error) {
    return (
      <Error>
        No weather data available for: <br />
        <StyledSpan>{area}</StyledSpan>
      </Error>
    );
  }

  if (!weather) {
    return <p>Loading...</p>;
  }

  // export default function WeatherDisplay({ area }) {
  //   const { data: weather, error } = useSWR(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&appid=077b5b129c3431c22f0b0d34d754456b`
  //   );

  //   if (error) {
  //     return (
  //       <Error>
  //         No weather data available for: <br />
  //         <StyledSpan>{area}</StyledSpan>
  //       </Error>
  //     );
  //   }

  //   if (!weather) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <>
      {weather && (
        <WeatherSection>
          <StyledArea>{area}</StyledArea>
          <StyledImage
            alt="weather"
            src={`weatherIcons/${weather.weather[0].icon}.png`}
          />
          <StyledTemperature>
            {Math.round(weather.main.temp)}°C
          </StyledTemperature>
        </WeatherSection>
      )}
    </>
  );
}
