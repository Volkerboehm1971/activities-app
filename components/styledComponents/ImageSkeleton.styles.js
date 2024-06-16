import styled from "styled-components";



export const ImageSkeleton = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: #E8E8E8;
  border-radius: 10px;
  z-index: -1;
  overflow: hidden;

&::after {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
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

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 211px;
  position: relative;
`;


export const ImageSkeletonAtCreate = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 281.25px;
  height: 210.75px;
  background-color: #E8E8E8;
  border-radius: 10px;
  z-index: 1;
  overflow: hidden;

&::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
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
