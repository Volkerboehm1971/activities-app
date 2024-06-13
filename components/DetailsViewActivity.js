import dynamic from "next/dynamic";
import {
  LinkActivityList,
  LinkAndBookmarkContainer,
  DetailImageContainer,
  DetailImage,
  Section,
  Title,
  Div,
  Subheader,
  Info,
  Article,
  AreaCountyContainer,
  ButtonContainer,
  ButtonDelete,
  LinkEdit,
  ResponsiveWrapper,
  WrapperImage,
  TextSection,
} from "./styledComponents/DetailsViewActivity.styles";
import Header from "./Header";
import WeatherForecast from "./WeatherForecast";
import Bookmark from "./Bookmark";

const DetailMap = dynamic(() => import("./DetailMap"), { ssr: false });

export default function DetailsViewActivity({
  detailActivity,
  isDeleteMode,
  setIsDeleteMode,
  id,
  onHandleBookmark,
  bookmarkedActivities,
}) {
  return (
    <>
      <Header>Details of Activity</Header>
      <ResponsiveWrapper>
      <LinkAndBookmarkContainer>
        <LinkActivityList href="/activityList">← Back</LinkActivityList>
        <Bookmark
          onHandleBookmark={onHandleBookmark}
          bookmarkedActivities={bookmarkedActivities}
          activity={detailActivity}
        />
      </LinkAndBookmarkContainer>
      <Section>
        <WrapperImage>
        <DetailImageContainer>
          <DetailImage
            src={detailActivity.image}
            fill
            alt="Image of Activity"
          />
        </DetailImageContainer>
        </WrapperImage>


        <TextSection>
        <Title>{detailActivity.title}</Title>
        <Div>
          <Subheader>Description</Subheader>
          <Article>{detailActivity.description}</Article>
        </Div>
        </TextSection>

        <AreaCountyContainer>
          <Div>
            <Info>
              {detailActivity.area}, {detailActivity.country}
            </Info>
          </Div>
        </AreaCountyContainer>
        <DetailMap
          longitude={detailActivity.lng}
          latitude={detailActivity.lat}
        ></DetailMap>
      </Section>
      <WeatherForecast detailActivity={detailActivity} />
      <ButtonContainer>
        <LinkEdit href={`/${id}/edit`}>Edit</LinkEdit>
        <ButtonDelete
          type="button"
          onClick={() => setIsDeleteMode(!isDeleteMode)}
        >
          Delete
        </ButtonDelete>
      </ButtonContainer>
      </ResponsiveWrapper>
    </>
  );
}
