import styled from "styled-components";
import IconWater from "./icons/IconsFilterCategory/Water";
import IconMountains from "./icons/IconsFilterCategory/Mountains";
import IconWinter from "./icons/IconsFilterCategory/Winter";
import IconBiking from "./icons/IconsFilterCategory/Biking";
import IconHiking from "./icons/IconsFilterCategory/Hiking";
import Link from "next/link";
import IconIndoor from "./icons/IconsFilterCategory/Indoor";
import IconOthers from "./icons/IconsFilterCategory/Others";
import IconExtreme from "./icons/IconsFilterCategory/Extreme";

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 10px;
`;

const ContainerIconLabel = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 0px;
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

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 0 85px 0;
  margin: 0 2rem 0 2rem;
`;

const StyledLi = styled.li`
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 0 20px 0;
  list-style-type: none;
`;

const StyledLinkDetailsPage = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:active {
    color: black;
  }
`;

export default function FilterByCategory({ handleIconClick, selectedByIcon }) {
  return (
    <>
      <IconsContainer>
        <Row>
          <ContainerIconLabel
            onClick={() => handleIconClick("Water")}
            // style={{
            //   color: selectedCategory === "Water" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Water" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconWater />
            </BackgroundIcons>
            <LabelIcons>Water</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleIconClick("Mountains")}
            // style={{
            //   color: selectedCategory === "Mountains" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Mountains" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconMountains />
            </BackgroundIcons>
            <LabelIcons>Mountains</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleIconClick("Winter")}
            // style={{
            //   color: selectedCategory === "Winter" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Winter" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconWinter />
            </BackgroundIcons>
            <LabelIcons>Winter</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleIconClick("Biking")}
            // style={{
            //   color: selectedCategory === "Biking" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Biking" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconBiking />
            </BackgroundIcons>
            <LabelIcons>Biking</LabelIcons>
          </ContainerIconLabel>
        </Row>

        <Row>
          <ContainerIconLabel
            onClick={() => handleIconClick("Hiking")}
            // style={{
            //   color: selectedCategory === "Hiking" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Hiking" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconHiking />
            </BackgroundIcons>
            <LabelIcons>Hiking</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleIconClick("Extrem")}
            // style={{
            //   color: selectedCategory === "Extrem" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Extrem" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconExtreme />
            </BackgroundIcons>
            <LabelIcons>Extreme</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleIconClick("Indoor")}
            // style={{
            //   color: selectedCategory === "Indoor" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Indoor" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconIndoor />
            </BackgroundIcons>
            <LabelIcons>Indoor</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleIconClick("Others")}
            // style={{
            //   color: selectedCategory === "Others" ? "orange" : "black",
            // }}
            style={{
              color: selectedByIcon === "Others" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconOthers />
            </BackgroundIcons>
            <LabelIcons>Others</LabelIcons>
          </ContainerIconLabel>
        </Row>
      </IconsContainer>
    </>
  );
}
