import GlobalStyle from "../styles";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { activities as initalActivities } from "@/lib/dummydata";

export default function App({ Component, pageProps }) {
  const [activities, setActivties] = useLocalStorageState("activities", {
    defaultValue: initalActivities,
  });

  function handleAddActivity(newActivity) {
    const newActivitiyWithID = { ...newActivity, id: uuid() };
    setActivties([newActivitiyWithID, ...activities]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        onAddActivity={handleAddActivity}
        activities={activities}
        {...pageProps}
      />
    </>
  );
}
