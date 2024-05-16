import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export async function Layout({ children }) {
  const session = await getServerSession(request, response, authOptions);
  return (
    <>
      <Header />
      {session ? <p>You are logged in</p> : <p>You are not logged in</p>
      }
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}



