import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignUpForm from '../../containers/AuthForms/SignUp';
import {View} from 'react-native';
import styles from '../../styles';

const Signup: React.FC = () => {
  return (
    <SafeAreaView style={styles['align-items-center']}>
      <View style={styles['width-80']}>
        <SignUpForm />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
