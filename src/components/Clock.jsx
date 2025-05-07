import React, { useEffect, useState } from "react";
import moment from "moment";
import DaysShow from "./tempelate/DaysShow";

import styles from "../styles/Clock.module.css";
import Number from "./background/Number";

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
    <div className={styles.ClockDiv}>
      <h1 className={styles.ClockH1}>
        <DaysShow day={day} daysList={DAYS} />
      </h1>
      <Number />
      <h3 className={styles.ClockH3}>{time}</h3>
    </div>
  );
}

export default Clock;
