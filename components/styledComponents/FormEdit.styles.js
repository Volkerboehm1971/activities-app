import styled from "styled-components";
import Link from "next/link";

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

export const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 70px;
`;

export const LinkCancel = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #3e407d;
  border: 7px solid #3e407d;
  border-radius: 5px;
  font-size: 18px;
`;

export const ButtonSave = styled.button`
  position: center;
  color: #ffffff;
  background-color: #4caf50;
  border: 7px solid #4caf50;
  border-radius: 5px;
  font-size: 18px;
`;