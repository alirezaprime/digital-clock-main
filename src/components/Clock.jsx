// import React, { useEffect, useState } from "react";
// import moment from "moment";

// import DaysShow from "./DaysShow";

// import styles from "../styles/Clock.module.css";

// function Clock() {
//   const [time, setTime] = useState(moment().format("h:mm:ss a"));
//   const [days, setDays] = useState("su");

//   const Days = ["su", "mo", "tu", "we", "th", "fr", "sa"];
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(moment().format("HH:mm:ss"));
//     }, 1000);

//     const Dinterval = setInterval(() => {
//       setDays(moment().format("dd"));
//     }, 86400000); //86400000 === 60 * 60 * 24 * 1000 days to milisec

//     return () => {
//       clearInterval(interval);
//       clearInterval(Dinterval);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>
//         <DaysShow days={days} Days={Days} />
//       </h1>
//       <h3>{time}</h3>
//     </div>
//   );
// }

// Sunday (یک‌شنبه)
// Monday (دوشنبه)
// Tuesday (سه‌شنبه)
// Wednesday (چهارشنبه)
// Thursday (پنج‌شنبه)
// Friday (جمعه)
// Saturday (شنبه)
// Azar 11, 1403 AP
/////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import moment from "moment";
import DaysShow from "./tempelate/DaysShow";

const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function Clock() {
  const [time, setTime] = useState(moment().format("HH:mm:ss"));
  const [day, setDay] = useState(moment().format("ddd").toLowerCase());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("HH:mm:ss"));
    }, 1000);

    const dayInterval = setInterval(() => {
      setDay(moment().format("ddd").toLowerCase());
    }, 86400000);

    return () => {
      clearInterval(interval);
      clearInterval(dayInterval);
    };
  }, []);

  return (
    <div>
      <h1>
        <DaysShow day={day} daysList={DAYS} />
      </h1>
      <h3>{time}</h3>
    </div>
  );
}

export default Clock;
