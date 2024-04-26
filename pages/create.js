import FormCreate from "@/components/FormCreate";
import styled from "styled-components";

const StyledHeadline = styled.h1`
  text-align: center;
`;

export default function CreateActivityPage() {
  return (
    <>
      <StyledHeadline>Create a new activity</StyledHeadline>
      <FormCreate />
    </>
  );
}
