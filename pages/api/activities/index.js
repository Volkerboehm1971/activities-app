import Activity from "@/db/models/activity";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const activities = await Activity.find();
    return response.status(200).json(activities);
  }
}
