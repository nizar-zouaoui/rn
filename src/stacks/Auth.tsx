import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../screens/SignIn';
import Signup from '../screens/Signup';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
