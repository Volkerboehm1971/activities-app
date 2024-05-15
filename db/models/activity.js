import mongoose from "mongoose";

const { Schema } = mongoose;

const activitySchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  categoryFilter: { type: String, required: false },
  area: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
