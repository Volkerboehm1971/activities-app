import { useState } from "react";
import MapOverview from "./MapOverview";
import styled from "styled-components";
import Image from "next/image";

const MapButton = styled.button`
  position: fixed;
  right: 25px;
`;

export default function MapIcon() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <MapButton onClick={() => setShowModal(!showModal)}>🌏</MapButton>
      {showModal && (
        <MapOverview
          onClickClose={() => setShowModal(!showModal)}
        ></MapOverview>
      )}
    </>
  );
}
