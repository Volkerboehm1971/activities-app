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
} from "./styledComponents/DetailsViewActivity.styles";
import Header from "./Header";
import Bookmark from "./Bookmark";

const DetailMap = dynamic(() => import("./DetailMap"), { ssr: false });

export default function DetailsViewActivity({
  detailActivity,
  isDeleteMode,
  setIsDeleteMode,
  id,
  onHandleBookmark,
  bookmarkedActivities,
  activityForBookmark,
}) {
  return (
    <>
      <Header>Details of Activity</Header>
      <LinkAndBookmarkContainer>
        <LinkActivityList href="/activityList">← Back</LinkActivityList>
        <Bookmark
          onHandleBookmark={onHandleBookmark}
          bookmarkedActivities={bookmarkedActivities}
          activity={detailActivity}
        />
      </LinkAndBookmarkContainer>
      <Section>
        <DetailImageContainer>
          <DetailImage
            src={detailActivity.image}
            width={400}
            height={200}
            alt="Image of Activity"
          />
        </DetailImageContainer>

        <Title>{detailActivity.title}</Title>

        <Div>
          <Subheader>Description</Subheader>
          <Article>{detailActivity.description}</Article>
        </Div>

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
      <ButtonContainer>
        <LinkEdit href={`/${id}/edit`}>Edit</LinkEdit>
        <ButtonDelete
          type="button"
          onClick={() => setIsDeleteMode(!isDeleteMode)}
        >
          Delete
        </ButtonDelete>
      </ButtonContainer>
    </>
  );
}
