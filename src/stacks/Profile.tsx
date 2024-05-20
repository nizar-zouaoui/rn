import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import Profile from '../screens/Profile';
import {ProfileRootStackParmaList} from '../navigation/profileScreenTypes';
import AuthContext from '../contexts/Auth';
const Stack = createNativeStackNavigator<ProfileRootStackParmaList>();

const ProfileStack: React.FC = () => {
  const {user} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={{
          email: user?.email,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
