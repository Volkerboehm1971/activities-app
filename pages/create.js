import FormCreate from "@/components/FormCreate";
import Header from "@/components/Header";

export default function CreateActivityPage({ onAddActivity }) {
  return (
    <>
      <Header>Create a new Activity</Header>
      <FormCreate onAddActivity={onAddActivity} />
    </>
  );
}
