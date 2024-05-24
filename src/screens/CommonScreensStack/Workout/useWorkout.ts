import {useRoute} from '@react-navigation/native';
import {myWorkouts, publicWorkouts} from '../../../data/workouts';
import {CommonScreensRouteProp} from '../../../navigation/commonScreensTypes';

const useWorkout = () => {
  const route = useRoute<CommonScreensRouteProp<'Workout'>>();
  const params = route.params;
  const workoutList = params.isPublic ? publicWorkouts : myWorkouts;
  const cardItem = workoutList.find(item => item.title === params.title);
  return {cardItem, title: params.title};
};

export default useWorkout;
