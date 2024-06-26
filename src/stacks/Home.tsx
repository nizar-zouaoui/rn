import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/HomeStack/Home';
import NewHome from '../screens/HomeStack/NewHome';
import {HomeRootStackParmaList} from '../navigation/homeScreenTypes';
import {useCommonScreens} from './CommonScreens/useCommonScreens';
const Stack = createNativeStackNavigator<HomeRootStackParmaList>();

const HomeStack: React.FC = () => {
  const commonScreens = useCommonScreens(Stack);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewHome" component={NewHome} />
      {commonScreens}
    </Stack.Navigator>
  );
};

export default HomeStack;
