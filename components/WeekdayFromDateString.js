import React, { useState, useEffect } from "react";

export default function WeekdayFromDateString({ dateString }) {
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    const dateTimeParts = dateString.split(" ");
    const datePart = dateTimeParts[0];
    const dateObject = new Date(datePart);

    const weekdays = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    const weekdayIndex = dateObject.getDay();
    const weekday = weekdays[weekdayIndex];

    setWeekday(weekday);
  }, [dateString]);

  return <h3>{weekday}</h3>;
}
