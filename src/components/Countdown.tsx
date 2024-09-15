import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import background from '../assets/backgroundPage.jpg'
interface TimeLeft {
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC = () => {
  const targetDate = '2024-12-22T00:00:00';
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      const months = (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth();
      const remainingDays = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      timeLeft = {
        months: months,
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Box style={styles.backgroundStyle}>
      <Box style={styles.container}>
        <div>
          <span style={styles.textColor}>{timeLeft.months} months </span>
          <span style={styles.textColor}>{timeLeft.days} days </span>
          <span style={styles.textColor}>{timeLeft.hours} hours </span>
          <span style={styles.textColor}>{timeLeft.minutes} minutes </span>
          <span style={styles.textColor}>{timeLeft.seconds} seconds</span>
        </div>
      </Box>
    </Box>
  );
};

const styles = {
  backgroundStyle: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '70vh',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:200
  },
  container: {
    border: "1px solid black"
  },
  textColor:{
    color:"#163020",
    fontSize:"50px"
  }
}

export default Countdown;