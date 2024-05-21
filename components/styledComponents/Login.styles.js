import styled from "styled-components";

export const LoginNoutButton = styled.button`
    position: fixed;
    top: 30px;
    right: 50px;
    text-decoration: none;
    color: #ffffff;
    background-color: #3e407d;
    border: 5px solid #3e407d;
    border-radius: 5px;
    font-size: 17px;
    padding-left: 5px;
    padding-right: 5px;

    &:hover{
        background-color: #232AEB;
        border-color: #232AEB;
    }

    &:active{
        background-color: #232AEB;
        border-color: #232AEB;
    }
`;

export const LoginStatus = styled.p`
    position: fixed;
    top: 1px;
    right: 55px;
`;
