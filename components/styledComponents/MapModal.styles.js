import styled from "styled-components";

export const MapSign = styled.div`
  position: absolute;
  right: 30px;
  top: 8px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1260px) {
    right: 21vw;
  }
`;
