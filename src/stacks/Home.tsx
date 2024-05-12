import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
const Stack = createNativeStackNavigator();

const Home = () => <Text>Authenticated</Text>;

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
