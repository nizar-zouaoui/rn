import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyledText,
  StyledView,
} from '../../../components/NativeStyledComponents';
import WourkoutCarousel from '../../../components/WourkoutCarousel';
import {myWorkouts, publicWorkouts} from '../../../data/workouts';
import {AppNavigationProp} from '../../../navigation/navigatorUtils';
import {CommonScreensParamList} from '../../../navigation/commonScreensTypes';
export type WorkoutElementType = {
  label: string;
  duration: number;
  resting: boolean;
};
export type WorkoutListType = {
  creatorEmail?: string;
  img: string;
  title: string;
  description: string;
  workoutElements: WorkoutElementType[];
};
const Home: React.FC = () => {
  const commonScreensNavigation =
    useNavigation<AppNavigationProp<CommonScreensParamList>>();
  const onCarouselCardPress = (title: string, isPublic: boolean) => {
    commonScreensNavigation.navigate('Workout', {title, isPublic});
  };
  return (
    <StyledView>
      <StyledText className="text-center">Activity History</StyledText>
      <WourkoutCarousel
        key="My Workouts"
        carouselTitle="My Workouts"
        data={myWorkouts}
        isPublic={false}
        onPress={onCarouselCardPress}
      />
      <WourkoutCarousel
        key="Top Trending Workouts"
        carouselTitle="Top Trending Workouts"
        data={publicWorkouts}
        onPress={onCarouselCardPress}
        isPublic
      />
    </StyledView>
  );
};

export default Home;
