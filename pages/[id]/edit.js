import styled from "styled-components";
import React from "react";
import FormEdit from "@/components/FormEdit";
import { useRouter } from "next/router";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function EditActivityPage({ onEditActivity }) {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  // const detailActivity = activities.find((activity) => activity.id === id);

  // if (!detailActivity) {
  //   return null;
  // }

  return (
    <>
      <StyledHeadline>Edit Activity</StyledHeadline>
      <FormEdit onEditActivity={onEditActivity} id={id} />
    </>
  );
}
