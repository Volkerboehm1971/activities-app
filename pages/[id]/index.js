import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import DeleteActivityModal from "@/components/DeleteActivityModal";
import DetailsViewActivity from "@/components/DetailsViewActivity";
import useSWR from "swr";
import Biking from "@/assets/icons/biking.gif";
import Image from "next/image";
import { LoadingAnimation } from "@/components/styledComponents/activityList.styles";

export default function ActivityCardDetails({
  onHandleBookmark,
  bookmarkedActivities,
}) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isDeleteMode ? "hidden" : "auto";
  }, [isDeleteMode]);

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
      {isDeleteMode && (
        <DeleteActivityModal
          isDeleteMode={isDeleteMode}
          setIsDeleteMode={setIsDeleteMode}
          currentActivity={activity}
        />
      )}

      <DetailsViewActivity
        detailActivity={activity}
        isDeleteMode={isDeleteMode}
        setIsDeleteMode={setIsDeleteMode}
        id={id}
        onHandleBookmark={onHandleBookmark}
        bookmarkedActivities={bookmarkedActivities}
        activityForBookmark={activity._id}
      />
    </>
  );
}
