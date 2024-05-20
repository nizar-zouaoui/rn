import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeRootStackParmaList} from '../../navigation/homeScreenTypes';
import {ProfileRootStackParmaList} from '../../navigation/profileScreenTypes';

export type MainTabParamList = {
  HomeStack: NavigatorScreenParams<HomeRootStackParmaList>;
  ProfileStack: NavigatorScreenParams<ProfileRootStackParmaList>;
};
