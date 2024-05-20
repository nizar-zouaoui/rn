import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../screens/SignIn';
import Signup from '../screens/Signup';
import {AuthRootStackParmaList} from '../navigation/authScreenTypes';
const Stack = createNativeStackNavigator<AuthRootStackParmaList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
