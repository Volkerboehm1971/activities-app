import styled from "styled-components";

export const OverlayDelete = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const DeleteField = styled.div`
  width: 350px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  background-color: white;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  margin: 20px 20px 30px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonCancel = styled.button`
  color: #ffffff;
  background-color: var(--secondary-color-light);
  border: 7px solid var(--secondary-color-light);
  border-radius: 5px;
  font-size: 18px;
  width: 85px;
`;

export const ButtonDelete = styled.button`
  color: #ffffff;
  background-color: #ed3021;
  border: 7px solid #ed3021;
  border-radius: 5px;
  font-size: 18px;
  width: 85px;
`;
