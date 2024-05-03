import Link from "next/link";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Spotlight = dynamic(() => import("@/components/Spotlight"), {
  ssr: false,
});

const Headline = styled.h1`
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 25px;
`;

export default function HomePage({ activities }) {
  const randomActivity =
    activities[Math.floor(Math.random() * activities.length)];

  return (
    <>
      <Headline>Activity App</Headline>
      <Spotlight randomActivity={randomActivity} />
      <Div>
        <StyledLink href={"/activityList"}>List of Activities</StyledLink>
        <StyledLink href={"/create"}>Add New Activity</StyledLink>
      </Div>
    </>
  );
}
