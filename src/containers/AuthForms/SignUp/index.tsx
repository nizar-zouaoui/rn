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

type SignUpFormType = {
  email: string;
  userName: string;
  password: string;
  passwordConfirmation: string;
};

const SignUpForm = () => {
  const navigation = useNavigation<AuthScreenProps['navigation']>();
  const onPress = () => {
    navigation.navigate('Login', {});
  };

  const formMethods = useForm<SignUpFormType>();
  const {signUp} = useAuthHooks();
  const onSubmit = (data: SignUpFormType) => {
    signUp({
      email: data.email,
      password: data.password,
      userName: data.userName,
    });
  };

  return (
    <View>
      <MainIcon
        source={require('../../../assets/icon.png')}
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
          label="User Name"
          placeholder="Enter your user name here"
          name="userName"
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
              message: 'Field is required!',
            },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          {...formMethods}
          control={formMethods.control}
          label="Confirm Password"
          placeholder="Re-Enter your password here"
          name="passwordConfirmation"
          isPassword
          rules={{
            required: {
              value: true,
              message: 'Field is required!',
            },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            validate: (val: string) => {
              if (formMethods.watch('password') !== val) {
                return 'Your passwords do no match';
              }
            },
          }}
        />
        <CustomButton
          onPress={formMethods.handleSubmit(onSubmit)}
          label="SIGN UP"
        />
      </FormProvider>
      <AuthSwitch
        onPress={onPress}
        message="Already have an account? "
        btnLabel="LOGIN"
      />
    </View>
  );
};

export default SignUpForm;
