import FormCreate from "@/components/FormCreate";
import styled from "styled-components";
import { activities } from "@/lib/dummydata";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function CreateActivityPage() {
  function addActivity(activity) {
    activities.push(activity);
  }

  console.log(activities);

  return (
    <>
      <StyledHeadline>Create a new activity</StyledHeadline>
      <FormCreate onSubmit={addActivity} />
    </>
  );
}
