import {useRoute} from '@react-navigation/native';
import {dataArr} from '../../../components/Carousel/useCarousel';
import {
  HomeScreenProps,
  HomeRootStackParmaList,
} from '../../../navigation/homeScreenTypes';

const useWorkout = () => {
  const route = useRoute<HomeScreenProps['route']>();
  const params = route.params as HomeRootStackParmaList['Workout'];
  const cardItem = dataArr.find(item => item.title === params.title);
  return {cardItem, title: params.title};
};

export default useWorkout;
