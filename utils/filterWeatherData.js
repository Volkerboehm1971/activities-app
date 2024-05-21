export function filterWeatherData(weatherList) {
  const StartingDay = weatherList.findIndex((weatherItem) =>
    weatherItem.dt_txt.endsWith("06:00:00")
  );
  return weatherList.slice(StartingDay);
}

export function filterWeatherByTime(weatherList, time) {
  return weatherList.filter((weatherItem) => weatherItem.dt_txt.endsWith(time));
}
