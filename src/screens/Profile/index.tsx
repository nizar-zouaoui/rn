import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import AuthContext from '../../contexts/Auth';
import CustomButton from '../../components/CustomButton';
import useAuthHooks from '../../contexts/Auth/useAuthHooks';
import styles from '../../styles';
import {useRoute} from '@react-navigation/native';
import {
  ProfileRootStackParmaList,
  ProfileScreenProps,
} from '../../navigation/profileScreenTypes';

const Profile: React.FC = () => {
  const {user} = useContext(AuthContext);
  const {logout} = useAuthHooks();
  const route = useRoute<ProfileScreenProps['route']>();
  const params = route.params as ProfileRootStackParmaList['Profile'];
  console.log(params);
  return (
    <View style={styles['align-items-center']}>
      <Text style={{marginVertical: 12}}>Profile</Text>
      <View style={styles['width-80']}>
        <Text>email: {user?.email}</Text>
        <Text>user name: {user?.userName}</Text>
        <CustomButton onPress={logout} label="LOG OUT" />
      </View>
    </View>
  );
};

export default Profile;
