import GlobalStyle from "../styles";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { activities as initalActivities } from "@/lib/dummydata";

export default function App({ Component, pageProps }) {
  const [activities, setActivties] = useLocalStorageState("activities", {
    defaultValue: initalActivities,
  });

  function handleAddActivity(newActivity) {
    const setNewActivties = { ...newActivity, id: uuid() };
    setActivties([setNewActivties, ...activities]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        addActivity={handleAddActivity}
        activities={activities}
        {...pageProps}
      />
    </>
  );
}
