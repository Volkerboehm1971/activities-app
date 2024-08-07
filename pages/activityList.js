import ActivityCard from "@/components/ActivityCard";
import { useState } from "react";
import useSWR from "swr";
import CategoryFilters from "@/components/CategoryFilters";
import Biking from "@/assets/icons/biking.gif";
import {
  LoadingAnimation,
  Ul,
  LinkDetailsPage,
  Li,
  Section,
  LabelSearchField,
  WrapperSearchBar,
  InputSearchField,
  ErrorMessage,
  BookmarkContainer,
} from "../components/styledComponents/activityList.styles";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Image from "next/image";
import Bookmark from "@/components/Bookmark";

const MapModal = dynamic(() => import("@/components/MapModal"), {
  ssr: false,
});

export default function ActivityList({
  onHandleBookmark,
  bookmarkedActivities,
  toggleDark,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedByIcon, setSelectedByIcon] = useState([]);

  const { data: activities, error } = useSWR("/api/activities");

  if (!activities) {
    return (
      <LoadingAnimation>
        <Image src={Biking} alt="Biking-Gif" width="256" height="142" />
        <p>is Loading</p>
      </LoadingAnimation>
    );
  }

  if (error) {
    return <h1>Oh, sorry something went wrong.</h1>;
  }

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
      <MapModal
        toggleDark={toggleDark}
        filteredActivities={
          filteredActivities.length > 0 ? filteredActivities : activities
        }
      />
      <Header>List of Activities</Header>

      <Section>
        <LabelSearchField htmlFor="image" />
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
            <Li key={activity._id}>
              <BookmarkContainer>
                <Bookmark
                  onHandleBookmark={onHandleBookmark}
                  bookmarkedActivities={bookmarkedActivities}
                  activity={activity}
                />
              </BookmarkContainer>
              <LinkDetailsPage href={`/${activity._id}`}>
                <ActivityCard
                  id={activity._id}
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
              <Li key={activity._id}>
                <LinkDetailsPage href={`/${activity._id}`}>
                  <ActivityCard
                    id={activity._id}
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
