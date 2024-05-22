import {useEffect} from 'react';
import {
  Easing,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ITimerClockProps} from '.';

const useTimerClock = ({onComplete, workout}: ITimerClockProps) => {
  const progress = useSharedValue(0);
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: circumference * progress.value,
    };
  });
  useEffect(() => {
    progress.value = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workout]);
  useEffect(() => {
    const totalDurationInMilliseconds = workout.duration * 1000;
    progress.value = withTiming(
      1,
      {
        duration: totalDurationInMilliseconds,
        easing: Easing.linear,
      },
      finished => {
        if (finished) {
          runOnJS(onComplete)();
        }
      },
    );
  }, [onComplete, workout, progress, circumference]);

  return {
    radius,
    normalizedRadius,
    strokeWidth,
    circumference,
    animatedProps,
    progress,
  };
};
export default useTimerClock;
