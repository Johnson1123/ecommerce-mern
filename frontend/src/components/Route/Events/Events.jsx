import React from "react";
import styles from "../../../styles/styles";
import EventsCard from "./EventsCard/EventsCard.jsx";

function Events() {
  return (
    <div className="my-3">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Popular Events </h1>
        </div>
        <div className="w-full grid">
          <EventsCard />
        </div>
      </div>
    </div>
  );
}

export default Events;
