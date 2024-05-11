import FormCreate from "@/components/FormCreate";
import { Headline } from "../components/styledComponents/create.styles";

export default function CreateActivityPage({ onAddActivity }) {
  return (
    <>
      <Headline>Create a new Activity</Headline>
      <FormCreate onAddActivity={onAddActivity} />
    </>
  );
}
