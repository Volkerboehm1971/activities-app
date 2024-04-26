import { activities } from "@/lib/dummydata";
import ActivityCard from "@/components/ActivityCard";
import styled from "styled-components";
import Link from "next/link";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  margin: 0px 30px 0px 30px;
  padding: 20px 0 20px 0;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0;
  margin: 0;
`;

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #4caf50;
  border: 5px solid #4caf50;
  border-radius: 5px;
  margin-left: 10px;
`;

export default function HomePage() {
  return (
    <>
      <StyledHeadline>List of Activities</StyledHeadline>
      <StyledUl>
        {activities.map((activity) => (
          <StyledLi key={activity.id}>
            <ActivityCard
              image={activity.image}
              title={activity.title}
              area={activity.area}
            />
          </StyledLi>
        ))}
      </StyledUl>
      <StyledLink href="/create">Add new Activity →</StyledLink>
    </>
  );
}
