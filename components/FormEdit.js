import { useRouter } from "next/router";
import { Form, Section, Input, Select, Textarea, ButtonContainer, LinkCancel, ButtonSave } from "./styledComponents/FormEdit.styles";

export default function FormEdit({ onEditActivity, id, activities }) {
  const router = useRouter();

  const defaultActivity = activities.find((activity) => activity.id === id);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const modifiedActivity = {
      id: id,
      title: data.title,
      category: data.category,
      area: data.area,
      country: data.country,
      image: data.image,
      description: data.description,
      lng: data.lng,
      lat: data.lat,
    };

    onEditActivity(modifiedActivity, id);

    router.push("/activityList");
  }

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
            defaultValue={defaultActivity?.title}
            required
          />
        </Section>

        <Section>
          <label htmlFor="category">Category of Activity</label>
          <Select
            id="category"
            name="category"
            defaultValue={defaultActivity?.category}
            required
          >
            <option value="">--Please select a category--</option>
            <option value="Surfing">Surfing</option>
            <option value="Hiking">Hiking</option>
            <option value="Kayaking">Kayaking</option>
            <option value="Biking">Biking</option>
            <option value="Hot Air Ballooning">Hot Air Ballooning</option>
            <option value="Sailing">Sailing</option>
            <option value="Others">Others</option>
          </Select>
        </Section>

        <Section>
          <label htmlFor="area">Area</label>
          <Input
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
          <Input
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
          <Input
            id="lng"
            name="lng"
            type="number"
            placeholder="Bsp. 133.2051549"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </Section>

        <Section>
          <label htmlFor="area">Latitude</label>
          <Input
            id="lat"
            name="lat"
            type="number"
            placeholder="Bsp. 34.4088519"
            pattern="^(?!.*\s{2,}).+$"
            required
          />
        </Section>
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
        <ButtonContainer>
          <LinkCancel href={`/${id}`}>Cancel</LinkCancel>
          <ButtonSave type="submit">Save</ButtonSave>
        </ButtonContainer>
      </Form>
    </>
  );
}
