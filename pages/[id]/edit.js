import styled from "styled-components";
import React from "react";
import FormEdit from "@/components/FormEdit";
import { useRouter } from "next/router";
import { Headline } from "@/components/styledComponents/create.styles";


export default function EditActivityPage({ onEditActivity, activities }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Headline>Edit Activity</Headline>
      <FormEdit
        onEditActivity={onEditActivity}
        id={id}
        activities={activities}
      />
    </>
  );
}
