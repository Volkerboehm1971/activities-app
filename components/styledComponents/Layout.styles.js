import styled from "styled-components";

export const Main = styled.main`

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    background-color: ${props => props.$isToggled ? "var(--secondary-color-light)" : "white"};
    color: ${props => props.$isToggled ? "var(--text-color-dark)" : "var(--text-color-light)"};
    transition: background-color 250ms ease-in-out;

 @media only screen and (min-width: 1260px){
    border-left: 18vw solid #DDE8FF;
    border-right: 18vw solid #DDE8FF;
    }
`;