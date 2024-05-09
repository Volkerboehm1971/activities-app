import ActivityCard from "@/components/ActivityCard";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import FilterByCategory from "@/components/FilterByCategory";

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 0 85px 0;
  margin: 0 2rem 0 2rem;
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

const StyledLi = styled.li`
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 0 20px 0;
  list-style-type: none;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const LabelSearchField = styled.label`
  display: block;
  text-align: center;
  font-size: medium;
  font-weight: bold;
`;

const WrapperSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputSearchField = styled.input`
  padding: 8px 8px 8px 40px;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' fill='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 20px;
  width: 310px;
  margin-bottom: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: medium;
  font-weight: bold;
  text-align: center;
  margin: 0 0 25px 0;
`;

export default function ActivityList({ activities }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedByIcon, setSelectedByIcon] = useState([]);
  console.log(selectedByIcon);

  const getFilteredActivities = () => {
    let filtered = activities.filter(
      (activity) =>
        activity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedByIcon.length > 0) {
      filtered = filtered.filter((activity) =>
        selectedByIcon.includes(activity.categoryFilter)
      );
    }

    return filtered;
  };

  const filteredActivities = getFilteredActivities();

  const handleIconClick = (category) => {
    if (selectedByIcon.includes(category)) {
      setSelectedByIcon(selectedByIcon.filter((c) => c !== category));
    } else {
      setSelectedByIcon([...selectedByIcon, category]);
    }
  };

  return (
    <>
      <StyledHeadline>List of Activities</StyledHeadline>
      <StyledSection>
        <LabelSearchField htmlFor="image">Filter Activities</LabelSearchField>
        <WrapperSearchBar>
          <InputSearchField
            id="image"
            name="image"
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="Type to filter activities"
            required
          />
        </WrapperSearchBar>
        <FilterByCategory
          handleIconClick={handleIconClick}
          selectedByIcon={selectedByIcon}
        />
      </StyledSection>

      {filteredActivities.length > 0 ? (
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
      ) : (
        <div>
          <ErrorMessage>
            There is no matching result for your search! <br /> Please try
            again!
          </ErrorMessage>
          <StyledUl>
            {activities.map((activity) => (
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
        </div>
      )}
    </>
  );
}
