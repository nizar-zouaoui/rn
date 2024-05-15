import React from 'react';
import {SafeAreaView} from 'react-native';
import SignInForm from '../../containers/AuthForms/SignIn';

const SignIn: React.FC = () => {
  return (
    <SafeAreaView>
      <SignInForm />
    </SafeAreaView>
  );
};

export default SignIn;
