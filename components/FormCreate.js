import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";

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

const WrapperSearchBar = styled.div`
  position: relative;
  width: 100%;
`;

const InputSearchField = styled.input`
  padding: 0.5rem 0.5rem 0.5rem 30px;
  border: 2px solid black;
  border-radius: 0.5rem;
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' fill='black'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 20px;
`;

const ContainerReloadAndPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 25px;
  margin-top: 20px;
  align-items: center;
`;

const PlusButton = styled.div`
  // margin: 15px 15px 0px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  &:active {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
  }
  &:hover {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
  }
`;

const MinusButton = styled.div`
  // margin: 15px 0 15px 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  &:active {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
  }
  &:hover {
    -webkit-box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    box-shadow: inset -1px 1px 12px -3px rgba(0, 0, 0, 0.09);
    background: #ffffff;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 281.25px;
  height: 210.75px;
  // border: 0px solid black;
  // border-radius: 10px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;

export default function FormCreate({ onAddActivity }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [increment, setIncrement] = useState(0);
  const router = useRouter();
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
      image: imageSearch.hits[increment].largeImageURL,
      description: data.description,
    };
    onAddActivity(newActivity);
    router.push("/activityList");
  }
  const handleKeyPress = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  const API = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
  const { data: imageSearch } = useSWR(
    `https://pixabay.com/api/?key=${API}&q=${searchTerm}&image_type=photo`
  );
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
        <StyledSection>
          <label htmlFor="image">Search Activity Image</label>
          <WrapperSearchBar>
            <InputSearchField
              id="image"
              name="image"
              type="text"
              value={searchTerm}
              required
              onChange={handleKeyPress}
            />
          </WrapperSearchBar>

          <ContainerReloadAndPicture>
            <ButtonWrapper>
              <MinusButton
                onClick={() => {
                  if (increment >= 1) {
                    setIncrement((prevCount) => prevCount - 1);
                    console.log(increment);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </MinusButton>
              {imageSearch &&
                imageSearch.hits &&
                imageSearch.hits.length > 0 && (
                  <p>
                    {increment + 1}/{imageSearch.hits.length}
                  </p>
                )}
              <PlusButton
                onClick={() => {
                  if (increment < imageSearch.hits.length - 1) {
                    setIncrement((prevCount) => prevCount + 1);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z" />
                </svg>
              </PlusButton>
            </ButtonWrapper>
            <ImageContainer>
              {imageSearch?.hits?.length > 0 && (
                <StyledImage
                  src={imageSearch.hits[increment].largeImageURL}
                  fill
                  alt="Pixabay Image"
                />
              )}
            </ImageContainer>
          </ContainerReloadAndPicture>
        </StyledSection>
        <StyledButton type="submit">Add Activity</StyledButton>
      </StyledForm>
    </>
  );
}
