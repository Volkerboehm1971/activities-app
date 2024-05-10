import { Headline, Article, Section, ButtonCancel, ButtonDelete } from "./styledComponents/DeleteActivityWindow.styles"

export default function DeleteActivityWindow({
  onDeleteActivity,
  isDeleteMode,
  setIsDeleteMode,
}) {
  return (
    <>
      <Headline>Delete activity</Headline>
      <Article>
        Do you really want <br />
        to delete the Activity?
      </Article>
      <Section>
        <ButtonCancel onClick={() => setIsDeleteMode(!isDeleteMode)}>
          Cancel
        </ButtonCancel>
        <ButtonDelete onClick={onDeleteActivity}>
          Delete
        </ButtonDelete>
      </Section>
    </>
  );
}
