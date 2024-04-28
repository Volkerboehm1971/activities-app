import { activities } from "@/lib/dummydata";
import ActivityCard from "@/components/ActivityCard";
import styled from "styled-components";
import Link from "next/link";

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 0 65px 0;
  margin: 0;
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
  margin: 0px 30px 0px 30px;
  padding: 20px 0 20px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  color: #2c3752;
  background-color: #faa62f;
  border: 8px solid #faa62f;
  border-radius: 5px;
  position: fixed;
  left: 10px;
  right: 10px;
  bottom: 10px;
  z-index: 100;
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
