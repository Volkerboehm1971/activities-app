import {
  Navigation,
  LinkElement,
  List,
} from "./styledComponents/NavigationBar.styles";
import IconAdd from "./icons/Add";
import IconHome from "./icons/Home";
import IconActivityList from "./icons/ActivityList";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <Navigation>
      <List>
        <LinkElement onClick={() => router.push("/")} active={isActive("/")}>
          <IconHome fillColor={isActive("/") ? "#fff" : "#151b54"} />
        </LinkElement>

        <LinkElement
          onClick={() => router.push("/activityList")}
          active={isActive("/activityList")}
        >
          <IconActivityList
            fillColor={isActive("/activityList") ? "#fff" : "#151b54"}
          />
        </LinkElement>

        <LinkElement
          onClick={() => router.push("/create")}
          active={isActive("/create")}
        >
          <IconAdd fillColor={isActive("/create") ? "#fff" : "#151b54"} />
        </LinkElement>
      </List>
    </Navigation>
  );
}
