import { Article, SpotlightImage, Title } from "./styledComponents/Spotlight.styles";

export default function Spotlight({ title, area, image }) {
  return (
    <>
      <Article>
        <Title>Random Activity</Title>
        <p>{title}</p>
        <SpotlightImage src={image} width={281.25} height={210.75} alt="" />
        <p>{area}</p>
      </Article>
    </>
  );
}