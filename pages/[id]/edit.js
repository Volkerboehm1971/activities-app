import React from "react";
import FormEdit from "@/components/FormEdit";
import { useRouter } from "next/router";
import useSWR from "swr";
import Header from "@/components/Header";
import Biking from "@/assets/icons/biking.gif";
import Image from "next/image";
import { LoadingAnimation } from "@/components/styledComponents/activityList.styles";

export default function EditActivityPage({ activities }) {
  const router = useRouter();
  const { id } = router.query;

  const { data: currentActivity, error } = useSWR(`/api/activities/${id}`);

  if (!currentActivity) {
    return (
      <LoadingAnimation>
        <Image src={Biking} alt="Biking-Gif" width="256" height="142" />
        <p>is Loading</p>
      </LoadingAnimation>
    );
  }

  if (error) {
    return <h1>Oh, sorry you must have taken a wrong turn!</h1>;
  }

  return (
    <>
      <Header>Edit Activity</Header>
      <FormEdit
        id={id}
        activities={activities}
        activityToEdit={currentActivity}
      />
    </>
  );
}
