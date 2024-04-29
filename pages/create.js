import FormCreate from "@/components/FormCreate";
import styled from "styled-components";
import React from "react";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function CreateActivityPage({ onAddActivity }) {
  return (
    <>
      <StyledHeadline>Create a new activity</StyledHeadline>
      <FormCreate onAddActivity={onAddActivity} />
    </>
  );
}
