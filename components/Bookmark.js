import React from "react";
import IconStarBorder from "./icons/StarBorder";
import IconStarFilled from "./icons/StarFilled";
import { IconContainer } from "./styledComponents/Bookmark.styled";

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
    <IconContainer onClick={() => handleClick()} isBookmarked={isBookmarked}>
      {isBookmarked ? <IconStarFilled /> : <IconStarBorder />}
    </IconContainer>
  );
}
