import React, { useEffect, useState } from "react";

interface TimerProps {
  startTime: string;
  endTime: string;
}

export const Timer: React.FC<TimerProps> = ({ startTime, endTime }) => {
  const [duration, setDuration] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getDuration = (endTime: Date) => {
    const now = new Date();
    let difference = endTime.getTime() - now.getTime();

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * (1000 * 60);

    const seconds = Math.floor(difference / 1000);

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date(endTime);
      setDuration(getDuration(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <p>
      {duration.hours}시간 {duration.minutes}분 {duration.seconds}초 남음
    </p>
  );
};
