import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParmaList = {
  Signup: {};
  Login: {};
};

export type ScreenProps = NativeStackScreenProps<RootStackParmaList>;
