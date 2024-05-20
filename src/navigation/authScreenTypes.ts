import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthRootStackParmaList = {
  Signup: {};
  Login: {};
};

export type AuthScreenProps = NativeStackScreenProps<AuthRootStackParmaList>;
