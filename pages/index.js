import dynamic from "next/dynamic";
import WeatherDisplay from "@/components/WeatherDisplay";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

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
      <Header>Activity App</Header>
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
