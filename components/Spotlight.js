import {
  Area,
  Article,
  SpotlightActivityContainer,
  SpotlightImage,
  TextOverlay,
  Title,
} from "./styledComponents/Spotlight.styles";

export default function Spotlight({ title, area, image }) {
  return (
    <>
      <Article>
        <SpotlightActivityContainer>
          <SpotlightImage
            src={image}
            layout="fill"
            alt="Image Random Activity"
          />
        </SpotlightActivityContainer>
        <TextOverlay>
          <Title>{title}</Title>
          <Area>{area}</Area>
        </TextOverlay>
      </Article>
    </>
  );
}
