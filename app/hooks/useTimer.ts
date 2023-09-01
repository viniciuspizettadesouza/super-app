import { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number;
}

export const useTimer = ({ initialTime }: TimerProps) => {
  const [time, setTime] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && !intervalId) {
      const newIntervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
      setIntervalId(newIntervalId);
    } else if (!isActive && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [isActive, intervalId]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  return { time, isActive, startTimer, pauseTimer, resetTimer };
};
