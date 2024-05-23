import styled from "styled-components";

export const ImageSkeleton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 140.5px;
  width: 187.5px;
  background-color: #949294;
  border-radius: 10px;
  z-index: -1;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%; /* Ensure it spans the entire width */
    height: 100%; /* Ensure it spans the entire height */
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: shimmer 1.5s infinite;
    content: "";

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }
`;
