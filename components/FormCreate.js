import {
  Form,
  Section,
  Input,
  Select,
  Textarea,
  Button,
  WrapperSearchBar,
  InputSearchField,
  ContainerSwitchesAndPicture,
  ButtonWrapper,
  PlusButton,
  MinusButton,
  ImageContainer,
  SearchImage,
  TinyInputsWrapper,
  TinyInput,
  TinyDiv,
  ModalContainer,
  Label,
} from "./styledComponents/FormCreate.styles";
import {
  ImageSkeleton,
  SkeletonContainer,
  ImageSkeletonAtCreate,
} from "./styledComponents/ImageSkeleton.styles";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
import dynamic from "next/dynamic";

const MapGeodata = dynamic(() => import("./MapGeodata"), {
  ssr: false,
});

export default function FormCreate() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [increment, setIncrement] = useState(0);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);
  const router = useRouter();

  const { mutate } = useSWR("/api/activities");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const [categoryFilter, category] = data.category.split("-");

    const newActivity = {
      title: data.title,
      categoryFilter: categoryFilter,
      category: category,
      area: data.area,
      country: data.country,
      image: imageSearch.hits[increment].largeImageURL,
      description: data.description,
      lng: longitude,
      lat: latitude,
    };

    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    });

    if (response.ok) {
      mutate();
    }
    router.push("/activityList");
  }

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  function handleClick(event) {
    const { lat, lng } = event.latlng;
    setLatitude(lat.toFixed(10));
    setLongitude(lng.toFixed(10));
    setClickedPosition([lat, lng]);
  }

  const handleKeyPress = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    setIncrement(0);
    window.scroll({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  const { data: imageSearch, isLoading } = useSWR(
    searchTerm.length > 0 ? `/api/images/${searchTerm}` : null,
  );

  const typingInSearchbar =
    searchTerm.length > 0 && imageSearch && imageSearch.hits.length > 0;

  function showAlert(event) {
    event.preventDefault();
    window.alert(
      "Please ensure that both longitude and latitude values are selected before proceeding. You can easily select them by clicking on the 'Select Geodata' button.",
    );
  }
  return (
    <>
      <Form
        onSubmit={latitude && longitude !== null ? handleSubmit : showAlert}
      >
        <Section>
          <Label htmlFor="title">Activity Name</Label>
          <Input
            id="title"
            name="title"
            type="text"
            minLength="1"
            maxLength="150"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </Section>
        <Section>
          <Label htmlFor="category">Category of Activity</Label>
          <Select id="category" name="category" required>
            <option value="">--Please select a category--</option>
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
            <Label htmlFor="area">Area</Label>
            <TinyInput
              id="area"
              name="area"
              type="text"
              pattern="^(?!.*\s{2,}).+$"
              required
            />
          </Section>
          <Section>
            <Label htmlFor="country">Country</Label>
            <TinyInput
              id="country"
              name="country"
              type="text"
              pattern="^(?!.*\s{2,}).+$"
              required
            />
          </Section>

          {longitude && latitude && !showModal && (
            <>
              <Section>
                <Label htmlFor="area">Longitude</Label>
                <TinyDiv id="lng">{longitude}</TinyDiv>
              </Section>
              <Section>
                <Label htmlFor="area">Latitude</Label>
                <TinyDiv id="lat">{latitude}</TinyDiv>
              </Section>
            </>
          )}
        </TinyInputsWrapper>

        <ModalContainer>
          <div onClick={() => setShowModal(!showModal)}>Select Geodata</div>
        </ModalContainer>

        {showModal && (
          <MapGeodata
            onClickClose={() => setShowModal(!showModal)}
            onHandleClick={handleClick}
            latitude={latitude}
            longitude={longitude}
            clickedPosition={clickedPosition}
          />
        )}

        <Section>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            rows="7"
            name="description"
            type="text"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </Section>
        <Section>
        <Label htmlFor="image">Search Activity Image</Label>
          <InputSearchField
            id="image"
            name="image"
            type="text"
            value={searchTerm}
            required
            onChange={handleKeyPress}
          />
        </Section>
        {typingInSearchbar ? (
          <ContainerSwitchesAndPicture>
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
                  viewBox="0 -960 700 960"
                  width="24px"
                  fill="#000000"
                >
                  <title>Minus Button</title>
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </MinusButton>
              <p>
                {increment + 1}/{imageSearch.hits.length}
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
                  <title>Plus Button</title>
                  <path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z" />
                </svg>
              </PlusButton>
            </ButtonWrapper>
            {isLoading ? (
              <ImageContainer>
                <ImageSkeleton />
              </ImageContainer>
            ) : (
              <ImageContainer>
                <SearchImage
                  src={imageSearch.hits[increment].webformatURL}
                  fill
                  alt="Pixabay Image"
                />
              </ImageContainer>
            )}
          </ContainerSwitchesAndPicture>
        ) : (
          searchTerm.length > 0 &&
          (imageSearch === undefined || imageSearch.total === 0) && (
            <ContainerSwitchesAndPicture>
              <ButtonWrapper>
                <MinusButton />
                <p>0/0</p>
                <PlusButton />
              </ButtonWrapper>
              <SkeletonContainer>
                <ImageSkeletonAtCreate />
              </SkeletonContainer>
            </ContainerSwitchesAndPicture>
          )
        )}
        <Button type="submit">Add Activity</Button>
      </Form>
    </>
  );
}
