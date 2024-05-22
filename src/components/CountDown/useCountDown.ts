import {AnimateableTextProps} from 'react-native-animateable-text/lib/typescript/src/TextProps';
import {
  useDerivedValue,
  interpolate,
  Extrapolation,
  useAnimatedProps,
} from 'react-native-reanimated';
import {CountdownProps} from '.';

const formatTime = (time: number) => {
  'worklet';

  const seconds = Math.floor(time / 1000);
  const milliseconds = time % 1000;

  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMilliseconds = milliseconds
    .toString()
    .padStart(2, '0')
    .substring(0, 2);

  return `${formattedSeconds}:${formattedMilliseconds}`;
};

const useCountDown = ({duration, progress}: CountdownProps) => {
  const time = useDerivedValue(() => {
    return formatTime(
      interpolate(
        progress.value,
        [0, 1],
        [duration * 1000, 0],
        Extrapolation.CLAMP,
      ),
    );
  });

  const animatedProps = useAnimatedProps<AnimateableTextProps>(() => ({
    text: time.value,
  }));
  return {animatedProps};
};
export default useCountDown;
