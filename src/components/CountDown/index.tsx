import React from 'react';
import {SharedValue} from 'react-native-reanimated';

import AnimateableText from 'react-native-animateable-text';
import useCountDown from './useCountDown';

export interface CountdownProps {
  progress: SharedValue<number>;
  duration: number;
}

const Countdown: React.FC<CountdownProps> = ({progress, duration}) => {
  const {animatedProps} = useCountDown({duration, progress});

  return (
    <AnimateableText
      className="text-2xl font-bold"
      animatedProps={animatedProps}
    />
  );
};

export default Countdown;
