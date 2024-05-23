import {
  ImageContainer,
  ActivityImage,
  TextOverlay,
  Title,
  Area,
  Wrapper,
} from "./styledComponents/ActivityCard.styles";
import { ImageSkeleton } from "./styledComponents/ImageSkeleton.styles";

export default function ActivityCard({ image, title, area }) {
  return (
    <Wrapper>
      <ImageContainer>
        <ActivityImage src={image} layout="fill" alt="" />
        <ImageSkeleton />
      </ImageContainer>
      <TextOverlay>
        <Title>{title}</Title>
        <Area>{area}</Area>
      </TextOverlay>
    </Wrapper>
  );
}
