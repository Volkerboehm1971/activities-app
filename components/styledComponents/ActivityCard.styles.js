import styled from "styled-components";
import Image from "next/image";




export const ActivityImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
`;

export const ImageSkeleton = styled.div`
  height: 140.5;
  width: 187.5;
  position: relative;
  overflow: hidden;
  background-color: #949294;

&::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  margin-top: 10px;
`;

export const Area = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  margin-top: 10px;
  padding-top: 2.5px;
`;