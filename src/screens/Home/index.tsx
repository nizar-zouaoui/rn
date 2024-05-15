import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import AuthContext from '../../contexts/Auth';
import CustomButton from '../../components/CustomButton';
import useAuthHooks from '../../contexts/Auth/useAuthHooks';

const Home: React.FC = () => {
  const {user} = useContext(AuthContext);
  const {logout} = useAuthHooks();
  return (
    <View>
      <Text>Home</Text>
      <Text>email: {user?.email}</Text>
      <Text>user name: {user?.userName}</Text>
      <CustomButton onPress={logout} label="LOG OUT" />
    </View>
  );
};

export default Home;
