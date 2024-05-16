import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react"
import useSWR from "swr";
import { LoadingAnimation } from "@/components/styledComponents/activityList.styles";
import Image from "next/image";
import Biking from "@/assets/icons/biking.gif";

const fetcher = (arr) => fetch(arr).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: activities, error } = useSWR("/api/activities", fetcher);

  if (!activities) {
    return (
      <LoadingAnimation>
        <Image src={Biking} alt="Biking-Gif" width="256" height="142" />
        <p>is Loading</p>
      </LoadingAnimation>
    );
  }

  if (error) {
    return <h1>Oh, sorry you must have taken a wrong turn!</h1>;
  }

  return (
    <>
    <SessionProvider session={pageProps.session}>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <GlobalStyle />
        <Layout>
          <Component activities={activities} {...pageProps} />
        </Layout>
      </SWRConfig>
    </SessionProvider>;
    </>
  );
}
