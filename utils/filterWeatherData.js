export function filterWeatherByHour(hourlyList, hour) {
  return hourlyList
    .filter((item) => new Date(item.dt * 1000).getHours() === hour)
    .slice(0, 3);
}
