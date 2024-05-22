import {useContext, useRef} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import ThemeContext from '../../contexts/Theme';

const data = [
  {
    img: 'img 1',
    title: 'title 1',
    description: 'description 1',
    price: 'price 1',
  },
  {
    img: 'img 2',
    title: 'title 2',
    description: 'description 2',
    price: 'price 2',
  },
  {
    img: 'img 3',
    title: 'title 3',
    description: 'description 3',
    price: 'price 3',
  },
  {
    img: 'img 4',
    title: 'title 4',
    description: 'description 4',
    price: 'price 4',
  },
];
const useCarousel = () => {
  const {screenWidth} = useContext(ThemeContext);
  const translateX = useSharedValue(0);
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const currentIndex = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
      currentIndex.value = Math.round(event.contentOffset.x / screenWidth);
    },
  });

  const scrollToIndex = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * screenWidth,
        animated: true,
      });
    }
  };

  const pressLeft = () => {
    const newIndex = Math.max(currentIndex.value - 1, 0);
    scrollToIndex(newIndex);
  };

  const pressRight = () => {
    const newIndex = Math.min(currentIndex.value + 1, data.length - 1);
    scrollToIndex(newIndex);
  };

  return {
    scrollHandler,
    pressRight,
    pressLeft,
    screenWidth,
    scrollViewRef,
    data,
    translateX,
  };
};
export default useCarousel;
