import Link from "next/link";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Spotlight = dynamic(() => import("@/components/Spotlight"), {
  ssr: false,
});

const Headline = styled.h1`
  text-align: center;
`;

const TextUpdate = styled.p`
  text-align: center;
  margin-top: 90px;
  margin-bottom: 90px;
  font-weight: bold;
  font-size: medium;
`;

export default function HomePage({ activities }) {
  const randomActivity =
    activities[Math.floor(Math.random() * activities.length)];

  return (
    <>
      <Headline>Activity App</Headline>
      <TextUpdate>Weather function is coming...</TextUpdate>
      <Spotlight randomActivity={randomActivity} />
    </>
  );
}
