import React, {useContext} from 'react';
import AuthContext from '../../contexts/Auth';
import CustomButton from '../../components/CustomButton';
import useAuthHooks from '../../contexts/Auth/useAuthHooks';
import {useRoute} from '@react-navigation/native';
import {
  ProfileRootStackParmaList,
  ProfileScreenProps,
} from '../../navigation/profileScreenTypes';

import {StyledView, StyledText} from '../../components/NativeStyledComponents';

const Profile: React.FC = () => {
  const {user} = useContext(AuthContext);
  const {logout} = useAuthHooks();
  const route = useRoute<ProfileScreenProps['route']>();
  const params = route.params as ProfileRootStackParmaList['Profile'];
  console.log(params);
  return (
    <StyledView className="items-center">
      <StyledText className="my-3">Profile</StyledText>
      <StyledView className="w-4/5">
        <StyledText>email: {user?.email}</StyledText>
        <StyledText>user name: {user?.userName}</StyledText>
        <CustomButton onPress={logout} label="LOG OUT" />
      </StyledView>
    </StyledView>
  );
};

export default Profile;
