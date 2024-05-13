import ActivityCard from "@/components/ActivityCard";
import { useState } from "react";
import CatetoryFilters from "@/components/CatetoryFilters";
import {
  Headline,
  Ul,
  LinkDetailsPage,
  Li,
  Section,
  LabelSearchField,
  WrapperSearchBar,
  InputSearchField,
  ErrorMessage,
} from "../components/styledComponents/activityList.styles";
import dynamic from "next/dynamic";

const ShowMapOverview = dynamic(() => import("@/components/ShowMapOverview"), {
  ssr: false,
});

export default function ActivityList({ activities }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedByIcon, setSelectedByIcon] = useState([]);

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
      setSelectedByIcon(
        selectedByIcon.filter(
          (categoryParameter) => categoryParameter !== category
        )
      );
    } else {
      setSelectedByIcon([...selectedByIcon, category]);
    }
  };

  return (
    <>
      <ShowMapOverview
        filteredActivities={filteredActivities}
        activities={activities}
      ></ShowMapOverview>
      <Headline>List of Activities</Headline>
      <Section>
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
        <CatetoryFilters
          handleIconClick={handleIconClick}
          selectedByIcon={selectedByIcon}
        />
      </Section>

      {filteredActivities.length > 0 ? (
        <Ul>
          {filteredActivities.map((activity) => (
            <Li key={activity.id}>
              <LinkDetailsPage href={`/${activity.id}`}>
                <ActivityCard
                  id={activity.id}
                  image={activity.image}
                  title={activity.title}
                  area={activity.area}
                />
              </LinkDetailsPage>
            </Li>
          ))}
        </Ul>
      ) : (
        <div>
          <ErrorMessage>
            There is no matching result for your search! <br /> Please try
            again!
          </ErrorMessage>
          <Ul>
            {activities.map((activity) => (
              <Li key={activity.id}>
                <LinkDetailsPage href={`/${activity.id}`}>
                  <ActivityCard
                    id={activity.id}
                    image={activity.image}
                    title={activity.title}
                    area={activity.area}
                  />
                </LinkDetailsPage>
              </Li>
            ))}
          </Ul>
        </div>
      )}
    </>
  );
}
