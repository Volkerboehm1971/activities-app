import styled from "styled-components";
import Link from "next/link";

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

export const LoadingAnimation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 0 85px 0;
  margin: 0 2rem 0 2rem;
`;

export const LinkDetailsPage = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:active {
    color: black;
  }
  
`;

export const Li = styled.li`
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 0 20px 0;
  list-style-type: none;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const LabelSearchField = styled.label`
  display: block;
  text-align: center;
  font-size: medium;
  font-weight: bold;
`;

export const WrapperSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputSearchField = styled.input`
  padding: 8px 8px 8px 40px;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' fill='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px;
  width: 310px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: medium;
  font-weight: bold;
  text-align: center;
  margin: 0 0 25px 0;
`;
