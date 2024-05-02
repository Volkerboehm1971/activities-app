import GlobalStyle from "../styles";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { activities as initalActivities } from "@/lib/dummydata";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [activities, setActivties] = useLocalStorageState("activities", {
    defaultValue: initalActivities,
  });

  const router = useRouter();

  function handleAddActivity(newActivity) {
    const newActivitiyWithID = { ...newActivity, id: uuid() };
    setActivties([newActivitiyWithID, ...activities]);
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
      <GlobalStyle />
      <Component
        onAddActivity={handleAddActivity}
        onDeleteActivity={handleDeleteActivity}
        activities={activities}
        {...pageProps}
      />
    </>
  );
}
