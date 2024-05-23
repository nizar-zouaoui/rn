import {useContext, useRef, useState} from 'react';
import ThemeContext from '../../contexts/Theme';
import {FlatList, ViewToken} from 'react-native';
import {ICardProps} from '../Card';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/navigatorUtils';
import {HomeRootStackParmaList} from '../../navigation/homeScreenTypes';

export const dataArr = [
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
