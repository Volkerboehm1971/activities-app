export default function WeekdayFromDateString({ dateString }) {
  const dateTimeParts = dateString.split(" ");
  const datePart = dateTimeParts[0];
  const dateObject = new Date(datePart);

  const weekdays = [
    "Sonday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekdayIndex = dateObject.getDay();
  const weekday = weekdays[weekdayIndex];

  return <p>{weekday}</p>;
}
