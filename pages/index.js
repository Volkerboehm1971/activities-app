import dynamic from "next/dynamic";
import WeatherDisplay from "@/components/WeatherDisplay";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { LinkDetailsPage } from "../components/styledComponents/index.styles";
import Login from "@/components/Login";

const Spotlight = dynamic(() => import("@/components/Spotlight"), {
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
      <Header>Activity Tip</Header>
      {randomActivity && (
        <>
          <WeatherDisplay
            area={randomActivity.area}
            lat={randomActivity.lat}
            lng={randomActivity.lng}
          />
          <LinkDetailsPage href={`/${randomActivity._id}`}>
            <Spotlight
              title={randomActivity.title}
              image={randomActivity.image}
              area={randomActivity.area}
            />
          </LinkDetailsPage>
        </>
      )}
    </>
  );
}
