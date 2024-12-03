import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
import "../../styles/CountDown.css";

const CountDown = ({ month, day, year }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date(
      `${month} ${day}, ${year} 18:00:00`
    ).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="countdouwn_box">
      <div className="countdown_cover">
        <div className="countdown_value">
          <p className="countdown_name ">Days</p>
          <p className="">{`${
            timerDays < 10 && timerDays > 0 ? "0" : ""
          }${timerDays}`}</p>
        </div>
        <span className="colon ">:</span>
        <div className="countdown_value">
          <p className="countdown_name ">Hours</p>
          <p className="">{`${
            timerHours < 10 && timerHours > 0 ? "0" : ""
          }${timerHours}`}</p>
        </div>
        <span className="colon">:</span>
        <div className="countdown_value">
          <p className="countdown_name ">Minutes</p>
          <p className="">{`${
            timerMinutes < 10 && timerMinutes > 0 ? "0" : ""
          }${timerMinutes}`}</p>
        </div>
        <span className="colon ">:</span>
        <div className="countdown_value">
          <p className="countdown_name ">Seconds</p>
          <p className="">{`${
            timerSeconds < 10 && timerSeconds > 0 ? "0" : ""
          }${timerSeconds}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;

export const MiniCountDown = ({ month, day, year }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date(
      `${month} ${day}, ${year} 18:00:00`
    ).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="mini_box bg-[#D89A30] flex items-center justify-between px-4 py-1 w-full ">
      <div className="miniValueBox">
        <p className="">{`${
          timerDays < 10 && timerDays > 0 ? "0" : ""
        }${timerDays}`}</p>
        <p className=" ">Days</p>
      </div>
      <span className="">:</span>
      <div className="miniValueBox">
        <p className="">{`${
          timerHours < 10 && timerHours > 0 ? "0" : ""
        }${timerHours}`}</p>
        <p className=" ">Hours</p>
      </div>
      <span className="">:</span>
      <div className="miniValueBox">
        <p className="">{`${
          timerMinutes < 10 && timerMinutes > 0 ? "0" : ""
        }${timerMinutes}`}</p>
        <p className=" ">Minutes</p>
      </div>
      <span className="">:</span>
      <div className="miniValueBox">
        <p className="">{`${
          timerSeconds < 10 && timerSeconds > 0 ? "0" : ""
        }${timerSeconds}`}</p>
        <p className=" ">Seconds</p>
      </div>
    </div>
  );
};
