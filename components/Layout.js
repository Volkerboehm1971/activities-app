import NavigationBar from "./NavigationBar";
import { Main } from "./styledComponents/Layout.styles";

export default function Layout({ children, toggleDark }) {
  return (
    <>
      <Main $isToggled={toggleDark}>{children}</Main>
      <NavigationBar />
    </>
  );
}
