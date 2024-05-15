import { useRouter } from "next/router";
import { useState } from "react";
import DeleteActivityWindow from "@/components/DeleteActivityWindow";
import DetailsViewActivity from "@/components/DetailsViewActivity";
import useSWR from "swr";

export default function ActivityCardDetails({ onDeleteActivity }) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data: activity, error } = useSWR(`/api/activities/${id}`);

  if (error) {
    return <h1>Oops! Something went wrong.</h1>;
  }

  if (!activity) {
    return <h1>Loading...</h1>;
  }

  const detailActivity = activity;

  if (!detailActivity) {
    return null;
  }

  if (!detailActivity) {
    return null;
  }

  return (
    <>
      {isDeleteMode ? (
        <DeleteActivityWindow
          onDeleteActivity={() => onDeleteActivity(id)}
          isDeleteMode={isDeleteMode}
          setIsDeleteMode={setIsDeleteMode}
        />
      ) : (
        <DetailsViewActivity
          detailActivity={detailActivity}
          isDeleteMode={isDeleteMode}
          setIsDeleteMode={setIsDeleteMode}
          id={id}
        />
      )}
    </>
  );
}
