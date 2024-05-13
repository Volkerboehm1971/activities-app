import { useEffect, useState } from "react";
import MapOverview from "./MapOverview";
import { MapSign } from "./styledComponents/MapModal.styles";
import IconMap from "./icons/Map";

export default function MapModal({ activities, filteredActivities }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <>
      <MapSign onClick={() => setShowModal(!showModal)}>
        <IconMap />
      </MapSign>
      {showModal && (
        <MapOverview
          onClickClose={() => setShowModal(!showModal)}
          filteredActivities={filteredActivities}
          activities={activities}
        />
      )}
    </>
  );
}
