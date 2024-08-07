import styled from "styled-components";
import Image from "next/image";
import { Devices } from "./Devices.styles";

export const Form = styled.form`
  margin: 5px 30px 0px 30px;
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  @media only screen and (${Devices.xl}) {
    width: 500px;
  }
`;

export const Label = styled.label`
  padding-left: 3px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.27rem;
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
  appearance: none;
`;

export const TinyInputsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TinyInput = styled.input`
  display: flex;
  width: 135px;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;

  @media only screen and (${Devices.xl}) {
    width: 225px;
  }
`;

export const GeoLabel = styled.label`
  margin-top: 6px;
`;

export const TinyDiv = styled.div`
  display: flex;
  width: 135px;
  padding: 0.5rem;
  margin: 0;
  border: 2px solid black;
  border-radius: 0.5rem;
  align-items: center;
  height: 35px;

  @media only screen and (${Devices.xl}) {
    width: 225px;
  }
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
  gap: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

export const PlusButton = styled.div`
  width: 42px;
  height: 42px;
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
  width: 42px;
  height: 42px;
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
  border: 0px solid white;
  border-radius: 9px;
`;

export const Button = styled.button`
  position: center;
  color: #ffffff;
  background-color: var(--secondary-color-light);
  border: 7px solid var(--secondary-color-light);
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 70px;

  &:hover {
    cursor: pointer;
  }
`;
