import React, { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2023-10-15") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
      return timeLeft;
    }
  }
  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span className="text-[25px] text-[#475ad2]" key={index}>
        {`${timeLeft[interval]}`}
        {`${interval} : `}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px]">Time's up!</span>
      )}
    </div>
  );
}

export default Countdown;
