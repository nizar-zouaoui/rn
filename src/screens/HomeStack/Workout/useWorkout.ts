import {useRoute} from '@react-navigation/native';
import {
  HomeScreenProps,
  HomeRootStackParmaList,
} from '../../../navigation/homeScreenTypes';
import {dataArr} from '../../../data/workouts';

const useWorkout = () => {
  const route = useRoute<HomeScreenProps['route']>();
  const params = route.params as HomeRootStackParmaList['Workout'];
  const cardItem = dataArr.find(item => item.title === params.title);
  return {cardItem, title: params.title};
};

export default useWorkout;
