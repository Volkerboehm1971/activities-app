import Link from "next/link";
import styled from "styled-components";

export const LinkDetailsPage = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:active {
    color: black;
  }
`;

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
