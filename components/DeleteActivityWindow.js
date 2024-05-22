import Header from "./Header";
import {
  Section,
  ButtonCancel,
  ButtonDelete,
} from "./styledComponents/DeleteActivityWindow.styles";
import { useRouter } from "next/router";
import styled from "styled-components";

const OverlayDelete = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Deletefield = styled.div`
  width: 350px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  background-color: white;
`;

const ContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  margin: 20px 20px 30px 20px;
`;

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
      <OverlayDelete>
        <Deletefield>
          <ContainerContainer>
            <h2>Delete activity</h2>
            Do you really want to delete this activity?
          </ContainerContainer>
          <Section>
            <ButtonCancel onClick={() => setIsDeleteMode(!isDeleteMode)}>
              Cancel
            </ButtonCancel>
            <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
          </Section>
        </Deletefield>
      </OverlayDelete>
    </>
  );
}
