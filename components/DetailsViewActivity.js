import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Headline, LinkActivityList, Section, ImageDiv, Title, Div, DetailImage, Subheader, Info, Article, AreaCountyContainer, ButtonContainer, ButtonDelete, ButtonEdit } from "./styledComponents/DetailsViewActivity.styles";

const DetailMap = dynamic(() => import("./DetailMap"), { ssr: false });

export default function DetailsViewActivity({
  detailActivity,
  isDeleteMode,
  setIsDeleteMode,
  id,
}) {
  const router = useRouter();
  return (
    <>
      <Headline>Details of Activity</Headline>
      <LinkActivityList href="/activityList">← Back</LinkActivityList>
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
        <ButtonEdit type="button" onClick={() => router.push(`/${id}/edit`)}>
          Edit
        </ButtonEdit>
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
