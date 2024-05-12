import { useState } from "react";
import MapOverview from "./MapOverview";
import styled from "styled-components";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage";

const MapButton = styled.div`
  position: fixed;
  right: 25px;
`;

export default function MapIcon({ activities }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <MapButton onClick={() => setShowModal(!showModal)}>🌏</MapButton>
      {showModal && (
        <MapOverview
          onClickClose={() => setShowModal(!showModal)}
          activities={activities}
        ></MapOverview>
      )}
    </>
  );
}
