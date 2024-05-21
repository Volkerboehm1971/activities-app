import { useSession, signIn, signOut } from "next-auth/react";
import { LoginNoutButton, LoginStatus } from "./styledComponents/Login.styles";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <LoginStatus>Signed in as {session.user.email}</LoginStatus>
        <LoginNoutButton type="button" onClick={() => signOut()}>
          Sign out
        </LoginNoutButton>
      </>
    );
  }
  return (
    <>
      <LoginStatus>Not signed in</LoginStatus>
      <LoginNoutButton type="button" onClick={() => signIn()}>
        Sign in
      </LoginNoutButton>
    </>
  );
}
