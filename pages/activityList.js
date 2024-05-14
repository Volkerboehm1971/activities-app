import ActivityCard from "@/components/ActivityCard";
import { useState } from "react";

import CategoryFilters from "@/components/CategoryFilters";
import {
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

const MapModal = dynamic(() => import("@/components/MapModal"), {
  ssr: false,
});
import Header from "@/components/Header";

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
    <Header>List of Activities</Header>
      <MapModal
        filteredActivities={filteredActivities.length > 0 ? filteredActivities : activities}
      ></MapModal>

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
        <CategoryFilters
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
