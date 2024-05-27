import styled from "styled-components";

export const LoginNoutButton = styled.button`
  position: absolute;
  top: 40px;
  right: 15px;
  text-decoration: none;
  color: #ffffff;
  background-color: #0079C2;
  border: 5px solid #0079C2;
  border-radius: 5px;
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 25px;

  &:hover {
    background-color: #3e407d;
    border-color: #3e407d;
  }

  &:active {
    background-color: #3e407d;
    border-color: #3e407d;
  }
`;

export const LoginStatus = styled.p`
  position: absolute;
  top: 20px;
  right: 15px;
  text-align: right;
`;
