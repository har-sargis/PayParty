// src/Countdown.tsx
import React, { useEffect, useState } from 'react';
import { Text, TextStyle } from 'react-native';

interface CountdownProps {
  seconds: number;
  onCountdownEnd?: () => void;
  style?: TextStyle;
}

const Countdown: React.FC<CountdownProps> = ({ seconds, onCountdownEnd, style }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    if (remainingSeconds <= 0) {
      if (onCountdownEnd) {
        onCountdownEnd();
      }
      return;
    }

    const timeout = setTimeout(() => {
      setRemainingSeconds(remainingSeconds - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [remainingSeconds, onCountdownEnd]);

  return <Text style={[style, { color: '#37C8C3', fontSize: 17,}]}>{remainingSeconds.toString()}</Text>;
};

export default Countdown;
