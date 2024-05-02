import styled from "styled-components";

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledArticle = styled.p`
  line-height: 1.4;
  font-size: medium;
  margin-top: 150px;
  text-align: center;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledButtonCancel = styled.button`
  color: #ffffff;
  background-color: #3e407d;
  border: 7px solid #3e407d;
  border-radius: 5px;
  font-size: 18px;
`;

const StyledButtonDelete = styled.button`
  color: #ffffff;
  background-color: #ed3021;
  border: 7px solid #ed3021;
  border-radius: 5px;
  font-size: 18px;
`;

export default function DeleteActivityWindow({
  onDeleteActivity,
  isDeleteMode,
  setIsDeleteMode,
}) {
  return (
    <>
      <StyledHeadline>Delete activity</StyledHeadline>
      <StyledArticle>
        Do you really want <br />
        to delete the Activity?
      </StyledArticle>
      <StyledSection>
        <StyledButtonCancel onClick={() => setIsDeleteMode(!isDeleteMode)}>
          Cancel
        </StyledButtonCancel>
        <StyledButtonDelete onClick={onDeleteActivity}>
          Delete
        </StyledButtonDelete>
      </StyledSection>
    </>
  );
}
