import { useState } from "react";
import MapOverview from "./MapOverview";
import { MapButton } from "./styledComponents/MapIcon.styles";
import Image from "next/image";

export default function MapIcon({ activities, filteredActivities }) {
  const [showModal, setShowModal] = useState(false);

  showModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <MapButton onClick={() => setShowModal(!showModal)}>
        <span style={{ fontSize: "30px" }}>🌏</span>
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
