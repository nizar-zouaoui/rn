import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import NewHome from '../screens/NewHome';
import {HomeRootStackParmaList} from '../navigation/homeScreenTypes';
const Stack = createNativeStackNavigator<HomeRootStackParmaList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewHome" component={NewHome} />
    </Stack.Navigator>
  );
};

export default HomeStack;
