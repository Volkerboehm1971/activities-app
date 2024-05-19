import React, { useState, useEffect } from "react";

export default function WeekdayFromDateString({ dateString }) {
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
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

    setWeekday(weekday);
  }, [dateString]);

  return <p>{weekday}</p>;
}
