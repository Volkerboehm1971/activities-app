import mongoose from "mongoose";

const { Schema } = mongoose;

const activitySchema = new Schema({
  title: String,
  category: String,
  categoryFilter: String,
  area: String,
  country: String,
  description: String,
  image: String,
  lat: Number,
  lng: Number,
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
