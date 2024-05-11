import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 10px;
  background-color: #f0dd89;
  z-index: 10000;
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;