import { useState } from "react";
import MapOverview from "./MapOverview";
import { MapButton } from "./styledComponents/MapIcon.styles";
import IconMap from "./icons/Map";

export default function ShowMapOverview({ activities, filteredActivities }) {
  const [showModal, setShowModal] = useState(false);

  showModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <MapButton onClick={() => setShowModal(!showModal)}>
        <IconMap />
      </MapButton>
      {showModal && (
        <MapOverview
          onClickClose={() => setShowModal(!showModal)}
          filteredActivities={filteredActivities}
          activities={activities}
        ></MapOverview>
      )}
    </>
  );
}
