import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeRootStackParmaList = {
  Home: undefined;
  NewHome: undefined;
  Workout: {title: string};
};

export type HomeScreenProps = NativeStackScreenProps<HomeRootStackParmaList>;
