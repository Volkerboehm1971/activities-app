import DeleteActivity from "@/components/DeleteActivity";
import styled from "styled-components";
import React from "react";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function DeleteActivityPage({ activities, onDeleteActivity }) {
  return (
    <>
      <StyledHeadline>Delete activity</StyledHeadline>
      <DeleteActivity
        activities={activities}
        onDeleteActivity={onDeleteActivity}
      />
    </>
  );
}
