import styled from "styled-components";

export const LoginNoutButton = styled.button`
  position: absolute;
  top: 40px;
  right: 15px;
  text-decoration: none;
  color: #ffffff;
  background-color: #85CCE1;
  border: 5px solid #85CCE1;
  border-radius: 5px;
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 25px;

  &:hover {
    background-color: #EFDA7F;
    border-color: #EFDA7F;
  }

  &:active {
    background-color: #EFDA7F;
    border-color: #EFDA7F;
  }
`;

export const LoginStatus = styled.p`
  position: absolute;
  top: 20px;
  right: 15px;
  text-align: right;
`;
