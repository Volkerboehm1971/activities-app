import React from "react";
import FormEdit from "@/components/FormEdit";
import { useRouter } from "next/router";
import useSWR from "swr";
import Header from "@/components/Header";

export default function EditActivityPage({ onEditActivity, activities }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: currentActivity,
    isLoading,
    error,
  } = useSWR(`/api/activities/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Oops! Something went wrong..</h1>;
  }

  return (
    <>
      <Header>Edit Activity</Header>
      <FormEdit
        onEditActivity={onEditActivity}
        id={id}
        activities={activities}
        activityToEdit={currentActivity}
      />
    </>
  );
}
