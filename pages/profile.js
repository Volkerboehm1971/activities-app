import Header from "@/components/Header";
import {
  ErrorMessageNotSignedIn,
  HeaderArea,
  LoginDataContainer,
  ProfileImage,
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
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import DarkModeSwitch from "@/components/DarkModeSwitch";

export default function ProfilePage({
  onHandleBookmark,
  activities = [],
  bookmarkedActivities = [],
  toggleDark,
  toggleDisplay,
}) {
  const bookmarkedActivitiesDetails = activities.filter((activity) =>
    bookmarkedActivities.includes(activity._id),
  );

  const { data: session } = useSession();

  if (!session || !session.user) {
    return (
      <>
        <Header toggleDark={toggleDark}>Profile</Header>
        <ErrorMessageNotSignedIn $isToggled={toggleDark}>
          You are not logged in <br />- please log in!
        </ErrorMessageNotSignedIn>
        <Login />
        <DarkModeSwitch toggleDark={toggleDark} toggleDisplay={toggleDisplay}/>
      </>
    );
  }

  return (
    <>
      <Header>Profile</Header>
      <HeaderArea>
        <Login />
        <DarkModeSwitch toggleDark={toggleDark} toggleDisplay={toggleDisplay}/>
        <LoginDataContainer>
          <ProfileImage
            src={session.user.image}
            width={"100"}
            height={"100"}
            alt="user-image"
          />
          <UserGreeting>Hello, {session.user.name}!</UserGreeting>
        </LoginDataContainer>
      </HeaderArea>

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
              <LinkDetailsPage href={`/${activity._id}`}>
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
        <ErrorMessage>You have no Activities bookmarked yet!</ErrorMessage>
      )}
    </>
  );
}
