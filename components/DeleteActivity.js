import styled from "styled-components";
import Link from "next/link";

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

const StyledLinkCancel = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #3e407d;
  border: 7px solid #3e407d;
  border-radius: 5px;
  padding: 3px;
  font-size: 18px;
`;

const StyledButton = styled.button`
  color: #ffffff;
  background-color: #ed3021;
  border: 7px solid #ed3021;
  border-radius: 5px;
  font-size: 18px;
`;

export default function DeleteActivity({ onDeleteActivity, activities }) {
  const [id] = activities;
  return (
    <>
      <StyledArticle>
        Do you really want <br />
        to delete the Activity?
      </StyledArticle>
      <StyledSection>
        <StyledLinkCancel href="/">Cancel</StyledLinkCancel>
        <StyledButton onClick={() => onDeleteActivity(id)}>Delete</StyledButton>
      </StyledSection>
    </>
  );
}
