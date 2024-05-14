import React from "react";
import FormEdit from "@/components/FormEdit";
import { useRouter } from "next/router";
import Header from "@/components/Header";

export default function EditActivityPage({ onEditActivity, activities }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header>Edit Activity</Header>
      <FormEdit
        onEditActivity={onEditActivity}
        id={id}
        activities={activities}
      />
    </>
  );
}
