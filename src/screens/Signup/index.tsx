import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignUpForm from '../../containers/AuthForms/SignUp';

const Signup: React.FC = () => {
  return (
    <SafeAreaView>
      <SignUpForm />
    </SafeAreaView>
  );
};

export default Signup;
