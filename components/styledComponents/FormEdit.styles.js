import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";


export const Form = styled.form`
  margin: 5px 30px 0px 30px;
  width: 310px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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
`;

export const TinyInputsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.7rem;
`;

export const TinyInput = styled.input`
  display: flex;
  width: 135px;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const TinyDiv = styled.div`
  display: flex;
  width: 135px;
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
  margin-top: 3px;
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

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
  margin-bottom: 75px;
`;

export const LinkCancel = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #F23E2E;
  border: 7px solid #F23E2E;
  border-radius: 5px;
  font-size: 18px;
`;

export const ButtonSave = styled.button`
  position: center;
  color: #ffffff;
  background-color: var(--secondary-color-light);
  border: 7px solid var(--secondary-color-light);
  border-radius: 5px;
  font-size: 18px;
`;

//SEARCHBAR AND IMAGE SELECTOR BELOW

export const WrapperSearchBar = styled.div`
  position: relative;
  width: 100%;
`;

export const ContainerSwitchesAndPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputSearchField = styled.input`
  display: flex;
  width: 100%;
  margin-right: 25px;
  margin-top: 0.27rem;
  padding: 0.5rem 0.5rem 0.5rem 30px;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' fill='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 15px;
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
  }
`;

export const MinusButton = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  justify-content: center;
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
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 310px;
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
  border-radius: 10px;
`;
