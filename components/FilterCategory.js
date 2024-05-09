import styled from "styled-components";
import IconWater from "./icons/IconsFilterCategory/Water";
import IconMountains from "./icons/IconsFilterCategory/Mountains";
import IconWinter from "./icons/IconsFilterCategory/Winter";
import IconBiking from "./icons/IconsFilterCategory/Biking";
import IconHiking from "./icons/IconsFilterCategory/Hiking";
import { useState } from "react";
import ActivityCard from "@/components/ActivityCard";
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

export default function FilterByCategory({ activities }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getFilteredActivities = (selectedCategory, activities) => {
    if (!selectedCategory) {
      return activities;
    }

    return activities.filter(
      (activity) => activity.categoryFilter === selectedCategory
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredActivities = getFilteredActivities(
    selectedCategory,
    activities
  );

  return (
    <>
      <IconsContainer>
        <Row>
          <ContainerIconLabel
            onClick={() => handleCategoryClick("Water")}
            style={{
              color: selectedCategory === "Water" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconWater />
            </BackgroundIcons>
            <LabelIcons>Water</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleCategoryClick("Mountains")}
            style={{
              color: selectedCategory === "Mountains" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconMountains />
            </BackgroundIcons>
            <LabelIcons>Mountains</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleCategoryClick("Winter")}
            style={{
              color: selectedCategory === "Winter" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconWinter />
            </BackgroundIcons>
            <LabelIcons>Winter</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleCategoryClick("Biking")}
            style={{
              color: selectedCategory === "Biking" ? "orange" : "black",
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
            onClick={() => handleCategoryClick("Hiking")}
            style={{
              color: selectedCategory === "Hiking" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconHiking />
            </BackgroundIcons>
            <LabelIcons>Hiking</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleCategoryClick("Extrem")}
            style={{
              color: selectedCategory === "Extrem" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconExtreme />
            </BackgroundIcons>
            <LabelIcons>Extreme</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleCategoryClick("Indoor")}
            style={{
              color: selectedCategory === "Indoor" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconIndoor />
            </BackgroundIcons>
            <LabelIcons>Indoor</LabelIcons>
          </ContainerIconLabel>

          <ContainerIconLabel
            onClick={() => handleCategoryClick("Others")}
            style={{
              color: selectedCategory === "Others" ? "orange" : "black",
            }}
          >
            <BackgroundIcons>
              <IconOthers />
            </BackgroundIcons>
            <LabelIcons>Others</LabelIcons>
          </ContainerIconLabel>
        </Row>
      </IconsContainer>

      <StyledUl>
        {filteredActivities.map((activity) => (
          <StyledLi key={activity.id}>
            <StyledLinkDetailsPage href={`/${activity.id}`}>
              <ActivityCard
                id={activity.id}
                image={activity.image}
                title={activity.title}
                area={activity.area}
              />
            </StyledLinkDetailsPage>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
}
