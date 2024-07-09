import styled from "styled-components";

export const StyledHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.$isToggled ? "white" : "black" };
  transition: color 250ms ease-in-out;
`;

export const Headline = styled.h1`
  margin: 10px 0 10px 0;
  font-size: 18px;
  font-weight: 700;
`;
