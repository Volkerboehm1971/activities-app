import {
  Area,
  Article,
  SpotlightActivityContainer,
  SpotlightImage,
  TextOverlay,
  Title,
} from "./styledComponents/Spotlight.styles";
import { ImageSkeleton } from "./styledComponents/ImageSkeleton.styles";

export default function Spotlight({ title, area, image }) {
  return (
    <>
      <Article>
        <SpotlightActivityContainer>
          {!image ? (
            <ImageSkeleton />
          ) : (
            <SpotlightImage
              src={image}
              layout="fill"
              alt="Image Random Activity"
            />
          )}
        </SpotlightActivityContainer>
        <TextOverlay>
          <Title>{title}</Title>
          <Area>{area}</Area>
        </TextOverlay>
      </Article>
    </>
  );
}
