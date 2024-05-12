import {
  Navigation,
  List,
  ListItem,
} from "./styledComponents/NavigationBar.styles";
import IconAdd from "./icons/Add";
import IconHome from "./icons/Home";
import IconActivityList from "./icons/ActivityList";

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
