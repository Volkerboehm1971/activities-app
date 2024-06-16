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

  const searchingForImage =
    imageSearch &&
    imageSearch.hits &&
    imageSearch.hits.length > 0 &&
    searchTerm.length > 0;



  const defaultOrSearchedImage = searchingForImage
    ? imageSearch.hits[increment].webformatURL
    : activityToEdit?.image;

  const defaultImage = imageSearch === undefined;
  const typingInSearchbar = searchTerm.length > 0;

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
        <label htmlFor="title">Aktivitätsname</label>
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
        <label htmlFor="category">Kategorie der Aktivität</label>
        <Select
          id="category"
          name="category"
          defaultValue={`${activityToEdit?.categoryFilter}-${activityToEdit?.category}`}
        >
          <option value="">
            --Kategorie hier ändern--
          </option>
          <option value="Water-Surfsport">Surfsport</option>
          <option value="Water-Sailing">Segeln</option>
          <option value="Water-Swimming">Schwimmen</option>
          <option value="Water-Paddeling">Paddeln</option>
          <option value="Water-Diving">Tauchen</option>
          <option value="Winter-Skiing">Skifahren</option>
          <option value="Winter-Tobogganing">Rodeln</option>
          <option value="Winter-Ice skating">Schlittschuhlaufen</option>
          <option value="Winter-Snowboarding">Snowboarden</option>
          <option value="Biking-Mountainbiking">Mountainbiking</option>
          <option value="Biking-Cycling">Radfahren</option>
          <option value="Hiking-Strolling">Spazieren</option>
          <option value="Hiking-(Nordic) Walking">(Nordic) Walking</option>
          <option value="Hiking-Jogging">Joggen</option>
          <option value="Hiking-Hiking">Wandern</option>
          <option value="Extrem-Paragliding">Gleitschirmfliegen</option>
          <option value="Extrem-Bungeejumping">Bungeejumping</option>
          <option value="Extrem-Motorcross">Motocross</option>
          <option value="Extrem-Rafting">Rafting</option>
          <option value="Indoor-Curling">Curling</option>
          <option value="Indoor-Bouldern">Bouldern</option>
          <option value="Indoor-Ice Hockey">Eishockey</option>
          <option value="Others-Others">Sonstiges</option>
        </Select>
      </Section>
      <TinyInputsWrapper>
        <Section>
          <label htmlFor="area">Bereich</label>
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
          <label htmlFor="country">Land</label>
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
          <label htmlFor="longitude">Längengrad</label>
          <TinyDiv>
            {longitude !== null ? longitude : activityToEdit?.lng}
          </TinyDiv>
        </Section>
        <Section>
          <label htmlFor="latitude">Breitengrad</label>
          <TinyDiv>
            {latitude !== null ? latitude : activityToEdit?.lat}
          </TinyDiv>
        </Section>
      </TinyInputsWrapper>
      <ModalContainer>
        <div onClick={() => setShowModal(!showModal)}>Geodaten auswählen</div>
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
        <label htmlFor="description">Beschreibung</label>
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
        <label htmlFor="image">Aktivitätsbild suchen</label>
        <InputSearchField
          id="image"
          name="image"
          type="text"
          value={searchTerm}
          onChange={handleKeyPress}
        />
      </WrapperSearchBar>
      {typingInSearchbar && (
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
              {typingInSearchbar && searchingForImage
                ? imageSearch.hits.length
                : "1"}
            </p>
            <PlusButton
              onClick={() => {
                if (defaultImage) {
                  setIncrement(1);
                } else if (increment < imageSearch.hits.length - 1) {
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
      )}
      <ButtonContainer>
        <LinkCancel href={`/${id}`}>Abbrechen</LinkCancel>
        <ButtonSave type="submit">Speichern</ButtonSave>
      </ButtonContainer>
    </Form>
  );
}