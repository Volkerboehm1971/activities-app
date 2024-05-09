import styled from "styled-components";
import IconAdd from "./icons/Add";
import IconHome from "./icons/Home";
import IconActivityList from "./icons/ActivityList";

const Navigation = styled.nav`
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 10px;
  background-color: #f0dd89;
  z-index: 2;
`;

const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

export default function NavigationBar() {
  return (
    <Navigation>
      <List>
        <ListItem key="home">
          <IconHome />
        </ListItem>

        <ListItem key="activityList">
          <IconActivityList />
        </ListItem>

        <ListItem key="add">
          <IconAdd />
        </ListItem>
      </List>
    </Navigation>
  );
}
