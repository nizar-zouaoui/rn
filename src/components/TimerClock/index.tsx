import React from 'react';
import Animated from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import Countdown from '../CountDown';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../NativeStyledComponents';
import {WorkoutElementType} from '../../screens/HomeStack/Home';
import useTimerClock from './useTimerClock';

export interface ITimerClockProps {
  onComplete: () => void;
  workout?: WorkoutElementType;
  reset: () => void;
  setElementIndex: React.Dispatch<React.SetStateAction<number>>;
  isLast: boolean;
}

const TimerClock: React.FC<ITimerClockProps> = ({
  onComplete,
  workout,
  reset,
  setElementIndex,
  isLast,
}) => {
  const {
    radius,
    normalizedRadius,
    strokeWidth,
    circumference,
    animatedProps,
    progress,
    startTimer,
    pauseTimer,
    resetTimer,
    skipElement,
    workoutOn,
    workoutStart,
    workoutComplete,
  } = useTimerClock({onComplete, workout, reset, setElementIndex, isLast});

  return (
    <StyledView className="justify-center items-center pt-4">
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
            stroke={workout?.resting ? 'green' : '#3b5998'}
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
          <Countdown duration={workout?.duration || 0} progress={progress} />
        </StyledView>
        <StyledText className="text-base">
          {workout?.label || 'Workout Done'}
        </StyledText>
      </StyledView>
      <StyledView className="flex-row space-x-2 pt-2">
        {(!workoutOn || !workoutStart) && !workoutComplete && (
          <StyledTouchableOpacity
            onPress={startTimer}
            className="items-center rounded-lg border-slate-400 p-1 border-dashed border-2">
            <StyledText>
              {(!workoutStart && 'Start') || (!workoutOn && 'Resume')}
            </StyledText>
          </StyledTouchableOpacity>
        )}

        {workoutOn && !workoutComplete && (
          <StyledTouchableOpacity
            onPress={pauseTimer}
            className="items-center rounded-lg border-slate-400 p-1 border-dashed border-2">
            <StyledText>Pause</StyledText>
          </StyledTouchableOpacity>
        )}
        {(workoutStart || workoutComplete) && (
          <StyledTouchableOpacity
            onPress={resetTimer}
            className="items-center rounded-lg border-slate-400 p-1 border-dashed border-2">
            <StyledText>Reset</StyledText>
          </StyledTouchableOpacity>
        )}

        {!workoutComplete && (
          <StyledTouchableOpacity
            onPress={skipElement}
            className="items-center rounded-lg border-slate-400 p-1 border-dashed border-2">
            <StyledText>Skip</StyledText>
          </StyledTouchableOpacity>
        )}
      </StyledView>
    </StyledView>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default TimerClock;
