import Header from "./Header";
import {
  Article,
  Section,
  ButtonCancel,
  ButtonDelete,
} from "./styledComponents/DeleteActivityWindow.styles";

export default function DeleteActivityWindow({
  onDeleteActivity,
  isDeleteMode,
  setIsDeleteMode,
}) {
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
        <ButtonDelete onClick={onDeleteActivity}>Delete</ButtonDelete>
      </Section>
    </>
  );
}
