import { useRouter } from "next/router";
import { useState } from "react";
import DeleteActivityWindow from "@/components/DeleteActivityWindow";
import DetailsViewActivity from "@/components/DetailsViewActivity";
import useSWR from "swr";

export default function ActivityCardDetails() {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data: activity, error, isLoading } = useSWR(`/api/activities/${id}`);

  if (error) {
    return <h1>Oops! Something went wrong.</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
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
