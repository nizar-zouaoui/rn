import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import AuthContext from '../../contexts/Auth';
import CustomButton from '../../components/CustomButton';
import useAuthHooks from '../../contexts/Auth/useAuthHooks';
import {HomeScreenProps} from '../../navigation/homeScreenTypes';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const {user} = useContext(AuthContext);
  const {logout} = useAuthHooks();
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  return (
    <View>
      <CustomButton
        onPress={() => navigation.navigate('NewHome')}
        label="NEW HOME"
      />
      <Text>Home</Text>
      {user && <Text>email: {user.email} </Text>}
      {user && <Text>user name: {user.userName} </Text>}
      <CustomButton onPress={logout} label="LOG OUT" />
    </View>
  );
};

export default Home;
