import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

// const session = await getServerSession(request, response, authOptions);

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
