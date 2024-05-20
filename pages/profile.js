import Header from "@/components/Header";
import {
  UserGreeting,
  HeadingBookmarkedActivities,
  Ul,
  Li,
  LinkDetailsPage,
  ErrorMessage,
} from "@/components/styledComponents/profile.styled";
import Bookmark from "@/components/Bookmark";
import { BookmarkContainer } from "@/components/styledComponents/activityList.styles";
import ActivityCard from "@/components/ActivityCard";

export default function ProfilePage({
  onHandleBookmark,
  activities = [],
  bookmarkedActivities = [],
}) {
  const bookmarkedActivitiesDetails = activities.filter((activity) =>
    bookmarkedActivities.includes(activity._id)
  );

  return (
    <>
      <Header>Profile</Header>
      <UserGreeting>Hello, Username!</UserGreeting>
      <HeadingBookmarkedActivities>
        Your saved activities
      </HeadingBookmarkedActivities>
      {bookmarkedActivitiesDetails.length > 0 ? (
        <Ul>
          {bookmarkedActivitiesDetails.map((activity) => (
            <Li key={activity.id}>
              <BookmarkContainer>
                <Bookmark
                  onHandleBookmark={onHandleBookmark}
                  bookmarkedActivities={bookmarkedActivities}
                  activity={activity}
                />
              </BookmarkContainer>
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
        <ErrorMessage>
          Sorry there is no saved <br />
          Activity available at the moment!
        </ErrorMessage>
      )}
    </>
  );
}
