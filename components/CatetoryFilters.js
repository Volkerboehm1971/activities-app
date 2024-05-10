import { IconsContainer, ContainerIconLabel, BackgroundIcons, LabelIcons } from "./styledComponents/CatetoryFilters.styles"
import IconWater from "./icons/IconsFilterCategory/Water";
import IconMountains from "./icons/IconsFilterCategory/Mountains";
import IconWinter from "./icons/IconsFilterCategory/Winter";
import IconBiking from "./icons/IconsFilterCategory/Biking";
import IconHiking from "./icons/IconsFilterCategory/Hiking";
import IconIndoor from "./icons/IconsFilterCategory/Indoor";
import IconOthers from "./icons/IconsFilterCategory/Others";
import IconExtreme from "./icons/IconsFilterCategory/Extreme";



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