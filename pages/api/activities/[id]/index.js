import Activity from "@/db/models/activity";
import dbConnect from "@/db/connect.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const activity = await Activity.findById(id);
    if (!activity) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(activity);
  }

  if (request.method === "PUT") {
    const updatedActivity = request.body;
    await Activity.findByIdAndUpdate(id, updatedActivity);
    response.status(200).json({ status: "Activity updated!" });
    return;
  }

  if (request.method === "DELETE") {
    await Activity.findByIdAndDelete(id);
    response.status(200).json({ status: "Activity deleted!" });
    // if (request.method === "PUT") {
    //   const updatedActivity = request.body;
    //   await Activity.findByIdAndUpdate(id, updatedActivity);
    //   response.status(200).json({ status: "Activity updated!" });
    //   return;
    // }
  }
}
