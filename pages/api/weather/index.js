export default async function Weather(request, response) {
  const { lat, lng } = request.query;
  if (!lat || !lng) {
    return response
      .status(400)
      .json({ error: "Latitude and longitude are required." });
  }

  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

  if (request.method === "GET") {
    const apiResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHER_API_KEY}`
    );

    const WeatherData = await apiResponse.json();

    response.status(200).json(WeatherData);
  }
}
