import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";
import { LoadingAnimation } from "@/components/styledComponents/activityList.styles";
import Image from "next/image";
import Biking from "@/assets/icons/biking.gif";

const fetcher = (arr) => fetch(arr).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [bookmarkedActivities, setBookmarkedActivities] = useState([]);

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

  function checkIfActivityIsBookmarked(id) {
    return bookmarkedActivities.includes(id);
  }

  function addActivityToBookmarks(id) {
    setBookmarkedActivities([...bookmarkedActivities, id]);
  }

  function removeActivityFromBookmarks(id) {
    setBookmarkedActivities(
      bookmarkedActivities.filter((activityId) => activityId !== id)
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
      <SessionProvider session={pageProps.session}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <GlobalStyle />
          <Layout>
            <Component
              {...pageProps}
              activities={activities}
              onHandleBookmark={onHandleBookmark}
              bookmarkedActivities={bookmarkedActivities}
            />
          </Layout>
        </SWRConfig>
      </SessionProvider>
      ;
    </>
  );
}
