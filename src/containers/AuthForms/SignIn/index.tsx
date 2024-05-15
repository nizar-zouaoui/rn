import React from 'react';
import {View} from 'react-native';
import MainIcon from '../../../components/MainIcon';
import styles from '../../../styles';
import AuthSwitch from '../../../components/AuthSwitch';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {ScreenProps} from '../../../navigation/screenTypes';
import {FormProvider, useForm} from 'react-hook-form';
import useAuthHooks from '../../../contexts/Auth/useAuthHooks';

type SignInFormType = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const navigation = useNavigation<ScreenProps['navigation']>();
  const {login} = useAuthHooks();
  const onPress = () => {
    navigation.navigate('Signup', {});
  };

  const formMethods = useForm<SignInFormType>();

  const onSubmit = (data: SignInFormType) => {
    login(data);
  };

  return (
    <View>
      <MainIcon
        source={require('../../../assets/main.png')}
        label="My app"
        style={styles.img}
      />

      <FormProvider {...formMethods}>
        <CustomInput
          {...formMethods}
          control={formMethods.control}
          label="Email"
          placeholder="Enter your email here"
          name="email"
          rules={{
            required: {
              value: true,
              message: 'Field is required!',
            },
          }}
        />
        <CustomInput
          {...formMethods}
          control={formMethods.control}
          label="Password"
          placeholder="Enter your password here"
          name="password"
          isPassword
          rules={{
            required: {
              value: true,
              message: 'Field is required!a',
            },
          }}
        />
        <CustomButton
          onPress={formMethods.handleSubmit(onSubmit)}
          label="SIGN IN"
        />
      </FormProvider>
      <AuthSwitch
        onPress={onPress}
        message="Don't have an account? "
        btnLabel="SIGN UP"
      />
    </View>
  );
};

export default SignInForm;
