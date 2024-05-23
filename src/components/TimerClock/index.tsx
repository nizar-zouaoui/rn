import React from 'react';
import Animated from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import Countdown from '../CountDown';
import {StyledText, StyledView} from '../NativeStyledComponents';
import {WorkoutElementType} from '../../screens/HomeStack/Home';
import useTimerClock from './useTimerClock';

export interface ITimerClockProps {
  onComplete: () => void;
  workout: WorkoutElementType;
}

const TimerClock: React.FC<ITimerClockProps> = ({onComplete, workout}) => {
  const {
    radius,
    normalizedRadius,
    strokeWidth,
    circumference,
    animatedProps,
    progress,
  } = useTimerClock({onComplete, workout});

  return (
    <StyledView className="justify-center items-center pt-4">
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke="#d3d3d3"
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          stroke={workout.resting ? 'green' : '#3b5998'}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>
      <StyledView className="justify-center items-center absolute">
        <Countdown duration={workout.duration} progress={progress} />
      </StyledView>
      <StyledText className="text-base">{workout.label}</StyledText>
    </StyledView>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default TimerClock;
