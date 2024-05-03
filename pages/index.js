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

const StyledLinkAddActivity = styled(Link)`
  text-align: center;
  text-decoration: none;
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

export default function HomePage({ activities }) {
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
      <StyledLinkAddActivity href="/create">
        Add new Activity →
      </StyledLinkAddActivity>
    </>
  );
}
