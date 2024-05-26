import {
  OverlayDelete,
  DeleteField,
  DescriptionContainer,
  ButtonContainer,
  ButtonCancel,
  ButtonDelete,
} from "./styledComponents/DeleteActivityModal.styles";
import { useRouter } from "next/router";

export default function DeleteActivityModal({
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
      <OverlayDelete>
        <DeleteField>
          <DescriptionContainer>
            <h2>Delete activity</h2>
            Do you really want to delete this activity?
          </DescriptionContainer>
          <ButtonContainer>
            <ButtonCancel onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Cancel
            </ButtonCancel>
            <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
          </ButtonContainer>
        </DeleteField>
      </OverlayDelete>
    </>
  );
}
