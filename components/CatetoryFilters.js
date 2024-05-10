import styled from "styled-components";
import IconWater from "./icons/IconsFilterCategory/Water";
import IconMountains from "./icons/IconsFilterCategory/Mountains";
import IconWinter from "./icons/IconsFilterCategory/Winter";
import IconBiking from "./icons/IconsFilterCategory/Biking";
import IconHiking from "./icons/IconsFilterCategory/Hiking";
import IconIndoor from "./icons/IconsFilterCategory/Indoor";
import IconOthers from "./icons/IconsFilterCategory/Others";
import IconExtreme from "./icons/IconsFilterCategory/Extreme";

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-count: 2;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
`;

const ContainerIconLabel = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 0px;
  padding: 10px;
  color: ${(props) => (props.selected ? "orange" : "black")};
`;

const BackgroundIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid;
  border-radius: 10px;
  width: 50px;
  height: 50px;
`;

const LabelIcons = styled.label`
  font-size: small;
  margin-top: 3px;
`;

const categories = [
  { name: "Water", icon: <IconWater /> },
  { name: "Mountains", icon: <IconMountains /> },
  { name: "Winter", icon: <IconWinter /> },
  { name: "Biking", icon: <IconBiking /> },
  { name: "Hiking", icon: <IconHiking /> },
  { name: "Extrem", icon: <IconExtreme /> },
  { name: "Indoor", icon: <IconIndoor /> },
  { name: "Others", icon: <IconOthers /> },
];

export default function CatetoryFilters({ handleIconClick, selectedByIcon }) {
  return (
    <IconsContainer>
      {categories.map((category) => (
        <ContainerIconLabel
          key={category.name}
          onClick={() => handleIconClick(category.name)}
          selected={selectedByIcon.includes(category.name)}
        >
          <BackgroundIcons>{category.icon}</BackgroundIcons>
          <LabelIcons>{category.name}</LabelIcons>
        </ContainerIconLabel>
      ))}
    </IconsContainer>
  );
}
