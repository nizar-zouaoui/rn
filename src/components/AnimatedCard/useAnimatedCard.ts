import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type UseAnimatedCardParams = {
  screenWidth: number;
  index: number;
  translateX: SharedValue<number>;
};

const useAnimatedCard = ({
  screenWidth,
  index,
  translateX,
}: UseAnimatedCardParams) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * screenWidth,
      index * screenWidth,
      (index + 1) * screenWidth,
    ];
    const scale = interpolate(translateX.value, inputRange, [0.8, 1, 0.8]);
    return {
      transform: [{scale}],
    };
  });
  return {animatedStyle};
};
export default useAnimatedCard;
