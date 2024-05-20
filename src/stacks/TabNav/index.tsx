import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MainTabParamList} from './types';
import ProfileStack from '../Profile';

interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}
const bottomTabIcons = {
  ProfileStack: {
    name: 'people-circle',
    label: 'Profile',
    icon: (props: ITabBarIconProps) => (
      <Ionicons
        color={props.focused ? '#ffc463' : undefined}
        name="people-circle"
        size={24}
      />
    ),
  },
  HomeStack: {
    name: 'home',
    label: 'Home',
    icon: (props: ITabBarIconProps) => (
      <Ionicons
        color={props.focused ? '#ffc463' : undefined}
        name="home"
        size={24}
      />
    ),
  },
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        lazy: true,
        tabBarLabel: bottomTabIcons[name].label,
        tabBarIcon: bottomTabIcons[name].icon,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabNav;
