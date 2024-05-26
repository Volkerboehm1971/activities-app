import styled from "styled-components";

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
`;

export const ContainerIconLabel = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 0px;
  padding: 5px 10px;
  color: ${(props) => (props.selected ? "orange" : "black")};
`;

export const BackgroundIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid;
  border-radius: 10px;
  width: 50px;
  height: 50px;
`;

export const LabelIcons = styled.label`
  font-size: small;
  margin-top: 3px;
`;
