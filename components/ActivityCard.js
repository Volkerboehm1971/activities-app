import { ActivityImage, Div, Title, Area } from "./styledComponents/ActivityCard.styles"

export default function ActivityCard({ image, title, area }) {
  return (
    <>
      <ActivityImage src={image} width={187.5} height={140.5} alt="" />
      <Div>
        <Title>{title}</Title>
        <Area>{area}</Area>
      </Div>
    </>
  );
}