import {
  Navigation,
  List,
  ListItem,
} from "./styledComponents/NavigationBar.styles";
import { useState } from "react";
import IconAdd from "./icons/Add";
import IconHome from "./icons/Home";
import IconActivityList from "./icons/ActivityList";

export default function NavigationBar() {
  const [selectedIcon, setSelectedIcon] = useState("home");

  return (
    <Navigation>
      <List>
        <ListItem>
          <IconHome
            onSelect={() => setSelectedIcon("home")}
            fillColor={selectedIcon === "home" ? "#fff" : "#151b54"}
          />
        </ListItem>

        <ListItem>
          <IconActivityList
            onSelect={() => setSelectedIcon("activityList")}
            fillColor={selectedIcon === "activityList" ? "#fff" : "#151b54"}
          />
        </ListItem>

        <ListItem>
          <IconAdd
            onSelect={() => setSelectedIcon("add")}
            fillColor={selectedIcon === "add" ? "#fff" : "#151b54"}
          />
        </ListItem>
      </List>
    </Navigation>
  );
}
