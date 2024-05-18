import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import DeleteActivityWindow from "@/components/DeleteActivityWindow";
import DetailsViewActivity from "@/components/DetailsViewActivity";
import useSWR from "swr";
import Biking from "@/assets/icons/biking.gif";
import Image from "next/image";
import { LoadingAnimation } from "@/components/styledComponents/activityList.styles";

export default function ActivityCardDetails() {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data: activity, error } = useSWR(`/api/activities/${id}`);

  if (!activity) {
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
      {isDeleteMode ? (
        <DeleteActivityWindow
          isDeleteMode={isDeleteMode}
          setIsDeleteMode={setIsDeleteMode}
          currentActivity={activity}
        />
      ) : (
        <DetailsViewActivity
          detailActivity={activity}
          isDeleteMode={isDeleteMode}
          setIsDeleteMode={setIsDeleteMode}
          id={id}
        />
      )}
    </>
  );
}
