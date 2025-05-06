import React from "react";

function DaysShow({ day, daysList }) {
  if (!daysList.includes(day.toLowerCase())) {
    throw new Error(`Invalid day: ${day}`);
  }
  const capitalizedDays = daysList.map(
    (day) => day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
  );
  return <div>{capitalizedDays.join(" ")}</div>;
}

export default DaysShow;
