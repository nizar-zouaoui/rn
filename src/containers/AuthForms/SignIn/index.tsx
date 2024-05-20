import React from 'react';
import {View} from 'react-native';
import MainIcon from '../../../components/MainIcon';
import styles from '../../../styles';
import AuthSwitch from '../../../components/AuthSwitch';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenProps} from '../../../navigation/authScreenTypes';
import {FormProvider, useForm} from 'react-hook-form';
import useAuthHooks from '../../../contexts/Auth/useAuthHooks';
const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type SignInFormType = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const navigation = useNavigation<AuthScreenProps['navigation']>();
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
            pattern: {
              value: emailRegEx,
              message: 'Please enter a valid email!',
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
              message: 'Field is required!',
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
