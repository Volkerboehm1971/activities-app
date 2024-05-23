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
} from "./styledComponents/FormCreate.styles";
import {
  ImageSkeleton,
  SkeletonContainer,
  ImageSkeletonAtCreate,
} from "./styledComponents/ImageSkeleton.styles";
import IconMinusButton from "./icons/MinusButton";
import IconPlusButton from "./icons/PlusButton";
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
      behavior: "smooth" });
  };

  const { data: imageSearch, isLoading } = useSWR(
    searchTerm.length > 0 ? `/api/images/${searchTerm}` : null,
  );

  const typingInSearchbar =
    searchTerm.length > 0 && imageSearch && imageSearch.hits.length > 0;

  // these solution is for the moment, we will build a Modal solution next week
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
          <label htmlFor="title">Activity Name</label>
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
          <label htmlFor="category">Category of Activity</label>
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
            <label htmlFor="area">Area</label>
            <TinyInput
              id="area"
              name="area"
              type="text"
              pattern="^(?!.*\s{2,}).+$"
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
              required
            />
          </Section>

          {longitude && latitude && !showModal && (
            <>
              <Section>
                <label htmlFor="area">Longitude</label>
                <TinyDiv id="lng">{longitude}</TinyDiv>
              </Section>
              <Section>
                <label htmlFor="area">Latitude</label>
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
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            rows="8"
            name="description"
            type="text"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </Section>
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
        {typingInSearchbar ? (
          <ContainerSwitchesAndPicture>
            <ButtonWrapper>
              <IconMinusButton
                onClick={() => {
                  if (increment >= 1) {
                    setIncrement((prevCount) => prevCount - 1);
                  }
                }}
              />
              <p>
                {increment + 1}/{imageSearch.hits.length}
              </p>
              <IconPlusButton
                onClick={() => {
                  if (increment < imageSearch.hits.length - 1) {
                    setIncrement((prevCount) => prevCount + 1);
                  }
                }}
              />
            </ButtonWrapper>
            {isLoading ? (
              <ImageSkeleton />
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
        ) : (searchTerm.length > 0) & (imageSearch === undefined) ||
          (imageSearch !== undefined && imageSearch.total === 0) ? (
          <ContainerSwitchesAndPicture>
            <ButtonWrapper>
              <IconMinusButton />
              <p>0/0</p>
              <IconPlusButton />
            </ButtonWrapper>
            <SkeletonContainer>
              <ImageSkeletonAtCreate />
            </SkeletonContainer>
          </ContainerSwitchesAndPicture>
        ) : null}
        <Button type="submit">Add Activity</Button>
      </Form>
    </>
  );
}
