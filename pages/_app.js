import "../styles/global.css";
import Layout from "@/components/Layout";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";
import { LoadingAnimation } from "@/components/styledComponents/activityList.styles";
import Image from "next/image";
import Biking from "@/assets/icons/biking.gif";
import { Roboto_Flex } from "@next/font/google";

const fetcher = (arr) => fetch(arr).then((res) => res.json());

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

export const Darkmode = "whatever";

export default function App({ Component, pageProps }) {
  const [bookmarkedActivities, setBookmarkedActivities] = useState([]);
  const [toggleDark, setToggleDark] = useState(false);

  const { data: activities, error } = useSWR("/api/activities", fetcher);

  if (!activities) {
    return (
      <LoadingAnimation>
        <Image src={Biking} alt="Biking-Gif" width="299" height="195" />
      </LoadingAnimation>
    );
  }

  if (error) {
    return <h1>Oh, sorry you must have taken a wrong turn!</h1>;
  }

  function toggleDisplay(toggleDark) {
    return setToggleDark(!toggleDark);
  }

  function checkIfActivityIsBookmarked(id) {
    return bookmarkedActivities.includes(id);
  }

  function addActivityToBookmarks(id) {
    setBookmarkedActivities([...bookmarkedActivities, id]);
  }

  function removeActivityFromBookmarks(id) {
    setBookmarkedActivities(
      bookmarkedActivities.filter((activityId) => activityId !== id),
    );
  }

  function onHandleBookmark(activity) {
    const id = activity._id;
    checkIfActivityIsBookmarked(id)
      ? removeActivityFromBookmarks(id)
      : addActivityToBookmarks(id);
  }

  return (
    <>
      <main className={roboto.className}>
        <SessionProvider session={pageProps.session}>
          <SWRConfig
            value={{
              fetcher,
            }}
          >
            <Layout>
              <Component
                {...pageProps}
                activities={activities}
                onHandleBookmark={onHandleBookmark}
                bookmarkedActivities={bookmarkedActivities}
                toggleDark={toggleDark}
                toggleDisplay={toggleDisplay}
              />
            </Layout>
          </SWRConfig>
        </SessionProvider>
      </main>
    </>
  );
}
