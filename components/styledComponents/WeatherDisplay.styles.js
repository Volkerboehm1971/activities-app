import styled from "styled-components";

export const WeatherSection = styled.section`
  margin: 40px 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Area = styled.p`
  font-size: 18px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

export const Temperature = styled.p`
  font-size: 26px;
  font-weight: 700;
  width: 40%;
  text-align: center;
`;

export const WeatherIcon = styled.img`
  width: 90px;
`;

export const Error = styled.p`
  margin: 40px 20px 50px;
  background-color: #ff6666;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Span = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;