import NavigationBar from "./NavigationBar";
import { Main } from "./styledComponents/Layout.styles";

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
      <NavigationBar />
    </>
  );
}
