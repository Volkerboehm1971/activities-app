import { activities } from "@/lib/dummydata";
import ActivityCard from "@/components/ActivityCard";
import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0;
  margin: 0;
`;

export default function HomePage() {
  return (
    <>
      <h1>List of Activities</h1>
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
    </>
  );
}
