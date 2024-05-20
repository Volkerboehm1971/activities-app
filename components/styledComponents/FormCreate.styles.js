import styled from "styled-components";
import Image from "next/image";

export const Form = styled.form`
  margin: 10px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const TinyInputsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TinyInput = styled.input`
  display: flex;
  width: 165px;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const TinyDiv = styled.div`
  display: flex;
  width: 165px;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  align-items: center;
`;

export const ModalContainer = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  width: 175px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: #f0f0f0;
  font-size: 14px;
  font-weight: 600;
`;

export const Textarea = styled.textarea`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const WrapperSearchBar = styled.div`
  position: relative;
  width: 100%;
`;

export const InputSearchField = styled.input`
  padding: 0.5rem 0.5rem 0.5rem 30px;
  border: 2px solid black;
  border-radius: 0.5rem;
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' fill='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 14px;
`;

export const ContainerSwitchesAndPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 25px;
  margin-top: 20px;
  align-items: center;
`;

export const PlusButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);

  &:active {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
  }
  &:hover {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
    cursor: pointer;
  }
`;

export const MinusButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);

  &:active {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
  }

  &:hover {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  width: 281.25px;
  height: 210.75px;

  &:hover {
    border: 2px solid orange;
    border-radius: 10px;
  }
  &:active {
    border: 2px solid orange;
    border-radius: 10px;
  }
`;

export const SearchImage = styled(Image)`
  object-fit: cover;
  box-sizing: content-box;
  border: 0px solid white;
  border-radius: 9px;
`;

export const ImageSkeleton = styled.div`
  height: 140.5px;
  width: 187.5px;
  position: absolute;
  z-index: 1;
  background-color: #949294;
  border-radius: 10px;

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

export const Button = styled.button`
  position: center;
  color: #ffffff;
  background-color: #4caf50;
  border: 7px solid #4caf50;
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 70px;

  &:hover {
    cursor: pointer;
  }
`;
