import React from "react";
import "../../styles/DaysShow.css";

function DaysShow({ day, daysList }) {
  const capitalizedDays = daysList.map(
    (d) => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase()
  );

  return (
    <div>
      {capitalizedDays.map((d, index) => (
        <span
          key={index}
          className={d.toLowerCase() === day ? "active-day" : "default-day"}
        >
          {d}
        </span>
      ))}
    </div>
  );
}

export default DaysShow;
