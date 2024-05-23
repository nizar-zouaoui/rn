import {useContext, useRef, useState} from 'react';
import ThemeContext from '../../contexts/Theme';
import {FlatList, ViewToken} from 'react-native';
import {ICardProps} from '../Card';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/navigatorUtils';
import {HomeRootStackParmaList} from '../../navigation/homeScreenTypes';
import {dataArr} from '../../data/workouts';

const useCarousel = () => {
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
      currentIndex < dataArr.length - 1 ? currentIndex + 1 : dataArr.length - 1;
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

  const navigation = useNavigation<AppNavigationProp<HomeRootStackParmaList>>();
  return {
    scrollRight,
    scrollLeft,
    screenWidth,
    data: dataArr,
    flatListRef,
    viewConfigRef,
    onViewableItemsChanged,
    navigation,
  };
};
export default useCarousel;
