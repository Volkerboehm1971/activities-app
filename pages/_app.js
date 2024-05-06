import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { activities as initalActivities } from "@/lib/dummydata";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

const fetcher = (arr) => fetch(arr).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [activities, setActivties] = useLocalStorageState("activities", {
    defaultValue: initalActivities,
  });

  const router = useRouter();

  function handleAddActivity(newActivity) {
    const newActivitiyWithID = { ...newActivity, id: uuid() };
    setActivties([newActivitiyWithID, ...activities]);
  }

  function handleEditActivity(modifiedActivity, id) {
    const modifiedState = activities.map((activity) => {
      if (activity.id !== id) {
        return activity;
      }
      return modifiedActivity;
    });
    setActivties(modifiedState);
  }

  function handleDeleteActivity(id) {
    const updatedActivities = activities.filter(
      (activity) => activity.id !== id
    );

    setActivties(updatedActivities);

    router.push("/");
  }

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 30000,
        }}
      >
        <GlobalStyle />
        <Layout>
          <Component
            onAddActivity={handleAddActivity}
            onEditActivity={handleEditActivity}
            onDeleteActivity={handleDeleteActivity}
            activities={activities}
            {...pageProps}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
