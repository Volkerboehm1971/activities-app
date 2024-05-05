import dynamic from "next/dynamic";
import styled from "styled-components";
import WeatherDisplay from "@/components/WeatherDisplay";
import { useState, useEffect } from "react";

const Spotlight = dynamic(() => import("@/components/Spotlight"), {
  ssr: false,
});

const Headline = styled.h1`
  text-align: center;
`;

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
