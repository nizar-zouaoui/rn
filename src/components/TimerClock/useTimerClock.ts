/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {
  Easing,
  cancelAnimation,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ITimerClockProps} from '.';
import {Alert} from 'react-native';

const useTimerClock = ({
  onComplete,
  workout,
  reset,
  isLast,
  setElementIndex,
}: ITimerClockProps) => {
  const progress = useSharedValue(0);
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const [workoutStart, setWorkoutStart] = useState(false);
  const [workoutComplete, setWorkoutComplete] = useState(false);
  const [workoutOn, setWorkoutOn] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  let startTime = useSharedValue(0);
  let remainingTime = useSharedValue((workout?.duration || 0) * 1000);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: circumference * progress.value,
    };
  });
  useEffect(() => {
    progress.value = 0;
    startTime.value = 0;
    remainingTime.value = (workout?.duration || 0) * 1000;
  }, [workout]);

  useEffect(() => {
    if (workoutOn) {
      startTime.value = Date.now();
      setIsPaused(false);
      progress.value = withTiming(
        1,
        {
          duration: isPaused
            ? remainingTime.value
            : (workout?.duration || 0) * 1000,
          easing: Easing.linear,
        },
        finished => {
          if (finished) {
            runOnJS(onComplete)();
            if (isLast) {
              runOnJS(setWorkoutComplete)(true);
              runOnJS(setWorkoutStart)(false);
              runOnJS(setWorkoutOn)(false);
            }
          }
        },
      );
    }
  }, [onComplete, progress, workoutOn, workout]);

  const startTimer = () => {
    setWorkoutStart(true);
    startTime.value = Date.now();
    setWorkoutOn(true);
  };

  const pauseTimer = () => {
    const elapsed = Date.now() - startTime.value;
    remainingTime.value -= elapsed;
    setIsPaused(true);
    setWorkoutOn(false);
    cancelAnimation(progress);
  };

  const resetTimer = () => {
    setWorkoutStart(false);
    setWorkoutComplete(false);
    setWorkoutOn(false);
    reset();
    progress.value = 0;
    remainingTime.value = (workout?.duration || 0) * 1000;
  };

  const skipElement = () => {
    setElementIndex(prev => prev + 1);
    if (isLast) {
      setWorkoutOn(false);
      setWorkoutStart(false);
      progress.value = 1;
      remainingTime.value = 0;
      setWorkoutComplete(true);
      Alert.alert('Workout Done!');
    }
  };

  return {
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
  };
};
export default useTimerClock;
