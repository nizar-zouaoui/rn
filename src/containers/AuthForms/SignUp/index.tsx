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

type SignUpFormType = {
  email: string;
  userName: string;
  password: string;
  passwordConfirmation: string;
};

const SignUpForm = () => {
  const navigation = useNavigation<ScreenProps['navigation']>();
  const onPress = () => {
    navigation.navigate('Login', {});
  };

  const formMethods = useForm<SignUpFormType>();
  const {signUp} = useAuthHooks();
  const onSubmit = (data: SignUpFormType) => {
    if (data.password === data.passwordConfirmation) {
      signUp({
        email: data.email,
        password: data.password,
        userName: data.userName,
      });
    }
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
              message: 'Field is required!a',
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
              message: 'Field is required!a',
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
