import { useRouter } from "next/router";
import { useState } from "react";
import DeleteActivityWindow from "@/components/DeleteActivityWindow";
import DetailsViewActivity from "@/components/DetailsViewActivity";

export default function ActivityCardDetails({ activities, onDeleteActivity }) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const detailActivity = activities.find((activity) => activity.id === id);

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
