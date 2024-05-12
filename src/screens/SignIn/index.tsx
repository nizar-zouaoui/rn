import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import AuthSwitch from '../../components/AuthSwitch';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import MainIcon from '../../components/MainIcon';
import styles from '../../styles';
import {ScreenProps} from '../../navigation/screenTypes';
import AuthContext from '../../contexts/Auth';
interface ISignInProps extends ScreenProps {}

const SignIn: React.FC<ISignInProps> = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const onPress = () => {
    navigation.navigate('Signup', {});
  };
  const onLoginPress = () => {
    console.log('first');
    // login({
    //   email: 'hell',
    //   password: 'o',
    // });
  };
  return (
    <SafeAreaView>
      <MainIcon
        source={require('../../assets/main.png')}
        label="My app"
        style={styles.img}
      />
      <CustomInput label="Email" />
      <CustomInput label="Password" isPassword />
      <CustomButton onPress={onLoginPress} label="SIGN IN" />
      <AuthSwitch
        onPress={onPress}
        message="Don't have an account? "
        btnLabel="SIGN UP"
      />
    </SafeAreaView>
  );
};

export default SignIn;
