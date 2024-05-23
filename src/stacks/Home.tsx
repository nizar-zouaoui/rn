import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/HomeStack/Home';
import NewHome from '../screens/HomeStack/NewHome';
import {HomeRootStackParmaList} from '../navigation/homeScreenTypes';
import Workout from '../screens/HomeStack/Workout';
const Stack = createNativeStackNavigator<HomeRootStackParmaList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewHome" component={NewHome} />
      <Stack.Screen name="Workout" component={Workout} />
    </Stack.Navigator>
  );
};

export default HomeStack;
