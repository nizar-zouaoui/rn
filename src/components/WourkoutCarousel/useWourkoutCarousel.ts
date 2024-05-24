import {useContext, useRef, useState} from 'react';
import ThemeContext from '../../contexts/Theme';
import {FlatList, ViewToken} from 'react-native';
import {ICardProps} from '../Card';
import {WorkoutListType} from '../../screens/HomeStack/Home';

const useWourkoutCarousel = (data: WorkoutListType[]) => {
  const {screenWidth} = useContext(ThemeContext);
  const flatListRef = useRef<FlatList<ICardProps> | null>(null);

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex =
      currentIndex < data.length - 1 ? currentIndex + 1 : data.length - 1;
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true});
      setCurrentIndex(index);
    }
  };
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
  );

  return {
    scrollRight,
    scrollLeft,
    screenWidth,
    flatListRef,
    viewConfigRef,
    onViewableItemsChanged,
  };
};
export default useWourkoutCarousel;
