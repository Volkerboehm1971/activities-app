import React from "react";
import IconHeartBorder from "./icons/HeartBorder";
import IconHeartFilled from "./icons/HeartFilled";

export default function Bookmark({
  onHandleBookmark,
  bookmarkedActivities = [],
  activity,
}) {
  function handleClick() {
    onHandleBookmark(activity);
  }

  const isBookmarked = activity
    ? bookmarkedActivities.includes(activity._id)
    : false;

  return (
    <div onClick={() => handleClick()}>
      {isBookmarked ? <IconHeartFilled /> : <IconHeartBorder />}
    </div>
  );
}
