import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLinkHomePage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  background-color: #3e407d;
  border: 5px solid #3e407d;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
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
  margin-bottom: 70px;
`;

export default function FormCreate({ onAddActivity }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const [categoryFilter, category] = data.category.split("|");

    const newActivity = {
      title: data.title,
      categoryFilter: categoryFilter,
      category: category,
      area: data.area,
      country: data.country,
      image: data.image,
      description: data.description,
    };

    onAddActivity(newActivity);

    router.push("/");
  }

  return (
    <>
      <StyledLinkHomePage href="/">← Back</StyledLinkHomePage>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSection>
          <label htmlFor="title">Activity Name</label>
          <StyledInput
            id="title"
            name="title"
            type="text"
            minLength="1"
            maxLength="150"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </StyledSection>

        <StyledSection>
          <label htmlFor="category">Category of Activity</label>
          <StyledSelect id="category" name="category" required>
            <option value="">--Please select a category--</option>
            <option value="Water|Surfsport">Surfsport</option>
            <option value="Water|Sailing">Sailing</option>
            <option value="Water|Swimming">Swimming</option>
            <option value="Water|Paddeling">Paddeling</option>
            <option value="Water|Diving">Diving</option>

            <option value="Winter|Skiing">Skiing</option>
            <option value="Winter|Tobogganing">Tobogganing</option>
            <option value="Winter|Ice skating">Ice skating</option>
            <option value="Winter|Snowboarding">Snowboarding</option>

            <option value="Biking|Mountainbiking">Mountainbiking</option>
            <option value="Biking|Cycling">Cycling</option>

            <option value="Hiking|Strolling">Strolling</option>
            <option value="Hiking|(Nordic) Walking">(Nordic) Walking</option>
            <option value="Hiking|Jogging">Jogging</option>
            <option value="Hiking|Hiking">Hiking</option>

            <option value="Extrem|Paragliding">Paragliding</option>
            <option value="Extrem|Bungeejumping">Bungeejumping</option>
            <option value="Extrem|Motorcross">Motorcross</option>
            <option value="Extrem|Rafting">Rafting</option>

            <option value="Indoor|Curling">Curling</option>
            <option value="Indoor|Bouldern">Bouldern</option>
            <option value="Indoor|Ice Hockey">Ice Hockey</option>

            <option value="Others|Others">Others</option>
          </StyledSelect>
        </StyledSection>

        <StyledSection>
          <label htmlFor="area">Area</label>
          <StyledInput
            id="area"
            name="area"
            type="text"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </StyledSection>

        <StyledSection>
          <label htmlFor="country">Country</label>
          <StyledInput
            id="country"
            name="country"
            type="text"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </StyledSection>

        <StyledSection>
          <label htmlFor="image">Image URL</label>
          <StyledInput
            id="image"
            name="image"
            type="url"
            defaultValue="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            required
          />
        </StyledSection>

        <StyledSection>
          <label htmlFor="description">Description</label>
          <StyledTextarea
            id="description"
            rows="8"
            name="description"
            type="text"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </StyledSection>
        <StyledButton type="submit">Add Activity</StyledButton>
      </StyledForm>
    </>
  );
}
