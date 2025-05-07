import React from "react";

function DaysShow({ day, daysList }) {
  if (!daysList.includes(day.toLowerCase())) {
    throw new Error(`Invalid day: ${day}`);
  }
  const capitalizedDays = daysList.map(
    (day) => day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()
  );

  // let foundDay = null;
  // for (let Tday of capitalizedDays) {
  //   if (Tday === day) {
  //     foundDay = Tday;
  //     break;
  //   }
  // }

  return <div>{capitalizedDays.join(" ")}</div>;
}

export default DaysShow;
