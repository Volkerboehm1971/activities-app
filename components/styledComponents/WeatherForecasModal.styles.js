import styled from "styled-components";

export const WeatherForecastModalField = styled.section`
  margin: 12px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 20px;
  background: transparent;
  border: none;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const DisplayedDaysContainer = styled.div`
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DisplayedDay = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

export const Date = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
`;

export const Daytime = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 12px;
`;
