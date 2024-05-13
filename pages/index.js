import dynamic from "next/dynamic";
import WeatherDisplay from "@/components/WeatherDisplay";
import { useState, useEffect } from "react";
import { Headline } from "../components/styledComponents/index.styles";

const Spotlight = dynamic(() => import("@/components/Spotlight"), {
  ssr: false,
});

const ShowMapOverview = dynamic(() => import("@/components/ShowMapOverview"), {
  ssr: false,
});

export default function HomePage({ activities }) {
  const [randomActivity, setRandomActivity] = useState(null);

  useEffect(() => {
    if (!randomActivity) {
      const randomActivity =
        activities[Math.floor(Math.random() * activities.length)];
      setRandomActivity(randomActivity);
    }
  }, [activities, randomActivity]);

  return (
    <>
      <ShowMapOverview activities={activities}></ShowMapOverview>
      <Headline>Activity App</Headline>
      {randomActivity && (
        <>
          <WeatherDisplay area={randomActivity.area} />
          <Spotlight
            title={randomActivity.title}
            image={randomActivity.image}
            area={randomActivity.area}
          />
        </>
      )}
    </>
  );
}
