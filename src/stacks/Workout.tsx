import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeRootStackParmaList} from '../navigation/homeScreenTypes';
import {useCommonScreens} from './CommonScreens/useCommonScreens';
const Stack = createNativeStackNavigator<HomeRootStackParmaList>();

const WorkoutStack: React.FC = () => {
  const commonScreens = useCommonScreens(Stack);
  return (
    <Stack.Navigator initialRouteName="Home">{commonScreens}</Stack.Navigator>
  );
};

export default WorkoutStack;
