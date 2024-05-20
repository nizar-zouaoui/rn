import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ProfileRootStackParmaList = {
  Profile: {email: string};
};

export type ProfileScreenProps =
  NativeStackScreenProps<ProfileRootStackParmaList>;
