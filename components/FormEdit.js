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
  TinyDiv,
  ModalContainer,
  ContainerSwitchesAndPicture,
  Main
} from "./styledComponents/FormEdit.styles";
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

export default function FormEdit({ id, activityToEdit }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [increment, setIncrement] = useState(0);
  const [latitude, setLatitude] = useState(activityToEdit.lat);
  const [longitude, setLongitude] = useState(activityToEdit.lng);
  const [clickedPosition, setClickedPosition] = useState(null);

  const { data: imageSearch, isLoading } = useSWR(
    searchTerm.length > 0 ? `/api/images/${searchTerm}` : null,
  );

  const defaultImage =
    imageSearch &&
    imageSearch.hits &&
    imageSearch.hits.length > 0 &&
    searchTerm.length > 0;

  const defaultOrSearchedImage = defaultImage
    ? imageSearch.hits[increment].webformatURL
    : activityToEdit?.image;

  const typingInSearchbar = searchTerm.length >= 0;

  const { mutate } = useSWR(`/api/activities/${id}`);

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
      lng: longitude,
      lat: latitude,
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
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  };

  return (
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
            defaultValue={activityToEdit?.title}
            required
          />
        </Section>

        <Section>
          <label htmlFor="category">Category of Activity</label>
          <Select
            id="category"
            name="category"
            defaultValue={`${activityToEdit?.categoryFilter}-${activityToEdit?.category}`}
          >
            <option
              defaultValue={`${activityToEdit?.categoryFilter}-${activityToEdit?.category}`}
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
              defaultValue={activityToEdit?.area}
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
              defaultValue={activityToEdit?.country}
              required
            />
          </Section>

          <Section>
            <label htmlFor="area">Longitude</label>
            <TinyDiv>
              {longitude !== null ? longitude : activityToEdit?.lng}
            </TinyDiv>
          </Section>
          <Section>
            <label htmlFor="area">Latitude</label>
            <TinyDiv>
              {latitude !== null ? latitude : activityToEdit?.lat}
            </TinyDiv>
          </Section>
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
            defaultLatitude={activityToEdit?.lat}
            defaultLongitude={activityToEdit?.lng}
          ></MapGeodata>
        )}

        <Section>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            rows="7"
            name="description"
            type="text"
            pattern="^(?!.*\s{2,}).+$"
            defaultValue={activityToEdit?.description}
            required
          />
        </Section>

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
            {isLoading ? (
              <ImageSkeleton />
            ) : (
              <ImageContainer>
                <SearchImage
                  src={defaultOrSearchedImage}
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

        <ButtonContainer>
          <LinkCancel href={`/${id}`}>Cancel</LinkCancel>
          <ButtonSave type="submit">Save</ButtonSave>
        </ButtonContainer>
      </Form>
  );
}
