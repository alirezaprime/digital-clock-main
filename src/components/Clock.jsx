import React, { useEffect, useState } from "react";

import moment from "moment";

function Clock() {
  const [time, setTime] = useState(moment().format("h:mm:ss a"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>{time}</h3>
    </div>
  );
}

export default Clock;
// moment().format('h:mm:ss a'); // May 6th 2025, 12:03:14 pm
// moment().format('dddd');                    // Tuesday
// moment().format("MMM Do YY");               // May 6th 25
// moment().format('YYYY [escaped] YYYY');     // 2025 escaped 2025
// moment().format();
