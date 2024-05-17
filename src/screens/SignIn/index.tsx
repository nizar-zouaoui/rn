import React from 'react';
import {SafeAreaView, View} from 'react-native';
import SignInForm from '../../containers/AuthForms/SignIn';
import styles from '../../styles';

const SignIn: React.FC = () => {
  return (
    <SafeAreaView style={styles['align-items-center']}>
      <View style={styles['width-80']}>
        <SignInForm />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
