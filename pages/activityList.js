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

export default function ActivityList({ activities }) {
  return (
    <>
      <StyledHeadline>List of Activities</StyledHeadline>
      <StyledUl>
        {activities.map((activity) => (
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
