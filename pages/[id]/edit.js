import styled from "styled-components";
import React from "react";
import FormEdit from "@/components/FormEdit";
import { useRouter } from "next/router";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function EditActivityPage({ onEditActivity, activities }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <StyledHeadline>Edit Activity</StyledHeadline>
      <FormEdit
        onEditActivity={onEditActivity}
        id={id}
        activities={activities}
      />
    </>
  );
}
