import styled from "styled-components";
import Link from "next/link";

export const Headline = styled.h1`
  text-align: center;
`;

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