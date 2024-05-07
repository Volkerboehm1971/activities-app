import ActivityCard from "@/components/ActivityCard";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

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
  text-decoration: none;
  color: black;

  &:active {
    color: black;
  }
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 0 20px 0;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const WrapperSearchBar = styled.div`
  position: relative;
  width: 80%;
`;

const InputSearchField = styled.input`
  padding: 0.5rem 0.5rem 0.5rem 30px;
  border: 2px solid black;
  border-radius: 0.5rem;
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' fill='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 20px;
  margin-bottom: 20px;
`;

export default function ActivityList({ activities }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getFilteredActivities = (searchTerm, activities) => {
    if (!searchTerm) {
      return activities;
    }
    return activities.filter(
      (activity) =>
        activity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredActivities = getFilteredActivities(searchTerm, activities);

  console.log(searchTerm);
  console.log(filteredActivities);

  return (
    <>
      <StyledHeadline>List of Activities</StyledHeadline>
      <StyledSection>
        <label htmlFor="image">Search Activities</label>
        <WrapperSearchBar>
          <InputSearchField
            id="image"
            name="image"
            type="search"
            value={searchTerm}
            onChange={handleOnChange}
            required
          />
        </WrapperSearchBar>
      </StyledSection>
      <StyledUl>
        {filteredActivities.map((activity) => (
          <>
            <StyledLinkDetailsPage href={`/${activity.id}`}>
              <StyledLi key={activity.id}>
                <ActivityCard
                  id={activity.id}
                  image={activity.image}
                  title={activity.title}
                  area={activity.area}
                />
              </StyledLi>
            </StyledLinkDetailsPage>
          </>
        ))}
      </StyledUl>
    </>
  );
}
