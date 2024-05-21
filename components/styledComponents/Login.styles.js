import styled from "styled-components";

export const LoginNoutButton = styled.button`
  position: absolute;
  top: 40px;
  right: 15px;
  text-decoration: none;
  color: #ffffff;
  background-color: #3e407d;
  border: 5px solid #3e407d;
  border-radius: 5px;
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 25px;

  &:hover {
    background-color: #232aeb;
    border-color: #232aeb;
  }

  &:active {
    background-color: #232aeb;
    border-color: #232aeb;
  }
`;

export const LoginStatus = styled.p`
  position: absolute;
  top: 20px;
  right: 15px;
  text-align: right;
`;
