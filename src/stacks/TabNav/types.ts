import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeRootStackParmaList} from '../../navigation/homeScreenTypes';
import {ProfileRootStackParmaList} from '../../navigation/profileScreenTypes';
import {AppNavigationProp} from '../../navigation/navigatorUtils';

export type MainTabParamList = {
  HomeStack: NavigatorScreenParams<HomeRootStackParmaList>;
  ProfileStack: NavigatorScreenParams<ProfileRootStackParmaList>;
};

export type MainTabNavigationProp = AppNavigationProp<MainTabParamList>;
