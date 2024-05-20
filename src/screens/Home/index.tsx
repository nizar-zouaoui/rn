import React, {useContext} from 'react';
import AuthContext from '../../contexts/Auth';
import CustomButton from '../../components/CustomButton';
import useAuthHooks from '../../contexts/Auth/useAuthHooks';
import {HomeScreenProps} from '../../navigation/homeScreenTypes';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import {StyledText, StyledView} from '../../components/NativeStyledComponents';
import Caroussel from '../../components/Caroussel';

const Home: React.FC = () => {
  const {user} = useContext(AuthContext);
  const {logout} = useAuthHooks();
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  return (
    <StyledView>
      <Caroussel />
      <CustomButton
        onPress={() => navigation.navigate('NewHome')}
        label="NEW HOME"
      />
      <StyledView>
        <ProductCard />
      </StyledView>
      <StyledText>Home</StyledText>
      {user && <StyledText>email: {user.email} </StyledText>}
      {user && <StyledText>user name: {user.userName} </StyledText>}
      <CustomButton onPress={logout} label="LOG OUT" />
    </StyledView>
  );
};

export default Home;
