import Activity from "@/db/models/activity";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const activities = await Activity.find();
    return response.status(200).json(activities);
  }

  if (request.method === "POST") {
    await dbConnect();
    try {
      const activityData = request.body;
      await Activity.create(activityData);
      response.status(201).json({ status: "Acitivity created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
