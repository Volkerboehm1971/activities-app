import {
  ActivityImage,
  Div,
  Title,
  Area,
  Wrapper,
} from "./styledComponents/ActivityCard.styles";
import { ImageSkeleton } from "./styledComponents/ImageSkeleton.styles";

export default function ActivityCard({ image, title, area, isloading }) {
  return (
    <>
      <Wrapper>
        <ActivityImage src={image} width={187.5} height={140.5} alt="" />
        <ImageSkeleton />
      </Wrapper>
      <Div>
        <Title>{title}</Title>
        <Area>{area}</Area>
      </Div>
    </>
  );
}
