import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #4caf50;
  border: 5px solid #4caf50;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 17px;
`;

const StyledForm = styled.form`
  margin: 10px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

const StyledButton = styled.button`
  position: center;
  color: #ffffff;
  background-color: #4caf50;
  border: 7px solid #4caf50;
  border-radius: 5px;
  font-size: 18px;
`;

export default function FormCreate() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newActivity = {
      title: data.title,
      category: data.category,
      area: data.area,
      country: data.country,
      description: data.description,
    };

    console.log(newActivity);
  }

  return (
    <>
      <StyledLink href="/">← Back</StyledLink>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSection>
          <label htmlFor="title">Activity Name</label>
          <StyledInput
            id="title"
            name="title"
            type="text"
            minLength="1"
            maxLength="150"
            required
          />
        </StyledSection>

        <StyledSection>
          {" "}
          <label htmlFor="category">Category of Activity</label>
          <StyledSelect id="category" name="category" required>
            <option value="">--Please select a category--</option>
            <option value="Surfing">Surfing</option>
            <option value="Hiking">Hiking</option>
            <option value="Kayaking">Kayaking</option>
            <option value="Biking">Biking</option>
            <option value="Hot Air Ballooning">Hot Air Ballooning</option>
            <option value="Sailing">Sailing</option>
            <option value="Others">Others</option>
          </StyledSelect>
        </StyledSection>

        <StyledSection>
          <label htmlFor="area">Area</label>
          <StyledInput id="area" name="area" type="text" required />
        </StyledSection>

        <StyledSection>
          <label htmlFor="country">Country</label>
          <StyledInput id="country" name="country" type="text" required />
        </StyledSection>

        <StyledSection>
          <label htmlFor="description">Description</label>
          <StyledTextarea
            id="description"
            rows="8"
            name="description"
            type="text"
            required
          />
        </StyledSection>

        <StyledButton type="input">Add Activity</StyledButton>
      </StyledForm>
    </>
  );
}
