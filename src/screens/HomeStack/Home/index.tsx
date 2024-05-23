import React, {useContext} from 'react';
import AuthContext from '../../../contexts/Auth';
import CustomButton from '../../../components/CustomButton';
import useAuthHooks from '../../../contexts/Auth/useAuthHooks';
import {HomeScreenProps} from '../../../navigation/homeScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {
  StyledText,
  StyledView,
} from '../../../components/NativeStyledComponents';
import Carousel from '../../../components/Carousel';
export type WorkoutElementType = {
  label: string;
  duration: number;
  resting: boolean;
};
export const workoutElements: WorkoutElementType[] = [
  {
    duration: 10,
    label: 'element 1',
    resting: false,
  },
  {
    duration: 5,
    label: 'element 2',
    resting: true,
  },
];
const Home: React.FC = () => {
  const {user} = useContext(AuthContext);
  const {logout} = useAuthHooks();
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  return (
    <StyledView>
      <Carousel />
      <CustomButton
        onPress={() => navigation.navigate('NewHome')}
        label="NEW HOME"
      />
      <StyledText>Home</StyledText>
      {user && <StyledText>email: {user.email} </StyledText>}
      {user && <StyledText>user name: {user.userName} </StyledText>}
      <CustomButton onPress={logout} label="LOG OUT" />
    </StyledView>
  );
};

export default Home;
