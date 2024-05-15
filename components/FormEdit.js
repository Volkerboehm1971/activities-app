import {
  Form,
  Section,
  Input,
  Select,
  Textarea,
  ButtonContainer,
  LinkCancel,
  ButtonSave,
  WrapperSearchBar,
  InputSearchField,
  ButtonWrapper,
  MinusButton,
  PlusButton,
  ImageContainer,
  SearchImage,
  TinyInput,
  TinyInputsWrapper,
  WrapperSearchAndSwitch,
} from "./styledComponents/FormEdit.styles";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

export default function FormEdit({ id, activities }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [increment, setIncrement] = useState(0);

  const defaultActivity = activities.find((activity) => activity.id === id);

  const API = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
  const { data: imageSearch } = useSWR(
    `https://pixabay.com/api/?key=${API}&q=${searchTerm}&image_type=photo`
  );

  const defaultImage =
    imageSearch &&
    imageSearch.hits &&
    imageSearch.hits.length > 0 &&
    searchTerm.length > 0;

  const defaultOrSearchedImage = defaultImage
    ? imageSearch.hits[increment].largeImageURL
    : defaultActivity?.image;

  const typingInSearchbar = searchTerm.length > 0;

  const { data, isLoading, mutate } = useSWR(`/api/activities/${id}`);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const [categoryFilter, category] = data.category.split("-");

    const modifiedActivity = {
      id: id,
      title: data.title,
      categoryFilter: categoryFilter,
      category: category,
      area: data.area,
      country: data.country,
      image: defaultOrSearchedImage,
      description: data.description,
      lng: data.lng,
      lat: data.lat,
    };

    const response = await fetch(`/api/activities/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedActivity),
    });

    if (response.ok) {
      mutate();
      router.push(`/${id}`);
    }
  }
  const handleKeyPress = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    setIncrement(0);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Section>
          <label htmlFor="title">Activity Name</label>
          <Input
            id="title"
            name="title"
            type="text"
            minLength="1"
            maxLength="150"
            pattern="^(?!.*\s{2,}).+$"
            defaultValue={modifiedActivity?.title}
            required
          />
        </Section>

        <Section>
          <label htmlFor="category">Category of Activity</label>
          <Select
            id="category"
            name="category"
            defaultValue={`${defaultActivity?.categoryFilter}-${defaultActivity?.category}`}
          >
            <option
              defaultValue={`${defaultActivity?.categoryFilter}-${defaultActivity?.category}`}
            >
              --change category here--
            </option>
            <option value="Water-Surfsport">Surfsport</option>
            <option value="Water-Sailing">Sailing</option>
            <option value="Water-Swimming">Swimming</option>
            <option value="Water-Paddeling">Paddeling</option>
            <option value="Water-Diving">Diving</option>

            <option value="Winter-Skiing">Skiing</option>
            <option value="Winter-Tobogganing">Tobogganing</option>
            <option value="Winter-Ice skating">Ice skating</option>
            <option value="Winter-Snowboarding">Snowboarding</option>

            <option value="Biking-Mountainbiking">Mountainbiking</option>
            <option value="Biking-Cycling">Cycling</option>

            <option value="Hiking-Strolling">Strolling</option>
            <option value="Hiking-(Nordic) Walking">(Nordic) Walking</option>
            <option value="Hiking-Jogging">Jogging</option>
            <option value="Hiking-Hiking">Hiking</option>

            <option value="Extrem-Paragliding">Paragliding</option>
            <option value="Extrem-Bungeejumping">Bungeejumping</option>
            <option value="Extrem-Motorcross">Motorcross</option>
            <option value="Extrem-Rafting">Rafting</option>

            <option value="Indoor-Curling">Curling</option>
            <option value="Indoor-Bouldern">Bouldern</option>
            <option value="Indoor-Ice Hockey">Ice Hockey</option>

            <option value="Others-Others">Others</option>
          </Select>
        </Section>

        <TinyInputsWrapper>
          <Section>
            <label htmlFor="area">Area</label>
            <TinyInput
              id="area"
              name="area"
              type="text"
              pattern="^(?!.*\s{2,}).+$"
              defaultValue={defaultActivity?.area}
              required
            />
          </Section>
          <Section>
            <label htmlFor="country">Country</label>
            <TinyInput
              id="country"
              name="country"
              type="text"
              pattern="^(?!.*\s{2,}).+$"
              defaultValue={defaultActivity?.country}
              required
            />
          </Section>
          <Section>
            <label htmlFor="area">Longitude</label>
            <TinyInput
              id="lng"
              name="lng"
              type="number"
              placeholder="Bsp. 133.2051549"
              pattern="^(?!.*\s{2,}).+$"
              defaultValue={defaultActivity?.lng}
              required
            />
          </Section>
          <Section>
            <label htmlFor="area">Latitude</label>
            <TinyInput
              id="lat"
              name="lat"
              type="number"
              placeholder="Bsp. 34.4088519"
              pattern="^(?!.*\s{2,}).+$"
              defaultValue={defaultActivity?.lat}
              required
            />
          </Section>
        </TinyInputsWrapper>

        <Section>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            rows="8"
            name="description"
            type="text"
            pattern="^(?!.*\s{2,}).+$"
            defaultValue={defaultActivity?.description}
            required
          />
        </Section>

        <Section>
          <WrapperSearchAndSwitch>
            <WrapperSearchBar>
              <label htmlFor="image">Search Activity Image</label>
              <InputSearchField
                id="image"
                name="image"
                type="text"
                value={searchTerm}
                onChange={handleKeyPress}
              />
            </WrapperSearchBar>
            {typingInSearchbar ? (
              <ButtonWrapper>
                <MinusButton
                  onClick={() => {
                    if (increment >= 1) {
                      setIncrement((prevCount) => prevCount - 1);
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
                <p>
                  {increment + 1}/
                  {typingInSearchbar & defaultImage
                    ? imageSearch.hits.length
                    : "1"}
                </p>
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
            ) : (
              ""
            )}
          </WrapperSearchAndSwitch>
          <ImageContainer>
            <SearchImage
              src={defaultOrSearchedImage}
              fill
              alt="Pixabay Image"
            />
          </ImageContainer>
        </Section>

        <ButtonContainer>
          <LinkCancel href={`/${id}`}>Cancel</LinkCancel>
          <ButtonSave type="submit">Save</ButtonSave>
        </ButtonContainer>
      </Form>
    </>
  );
}
