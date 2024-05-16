import Header from "./Header";
import {
  Article,
  Section,
  ButtonCancel,
  ButtonDelete,
} from "./styledComponents/DeleteActivityWindow.styles";
import { useRouter } from "next/router";

export default function DeleteActivityWindow({
  isDeleteMode,
  setIsDeleteMode,
  currentActivity,
}) {
  const router = useRouter();

  async function handleDelete() {
    const response = await fetch(`/api/activities/${currentActivity._id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/activityList");
    }
  }

  return (
    <>
      <Header>Delete activity</Header>
      <Article>
        Do you really want <br />
        to delete the Activity?
      </Article>
      <Section>
        <ButtonCancel onClick={() => setIsDeleteMode(!isDeleteMode)}>
          Cancel
        </ButtonCancel>
        <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
      </Section>
    </>
  );
}
