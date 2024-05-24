import {AppNavigationProp, AppRouteProp} from './navigatorUtils';

export type CommonScreensParamList = {
  Workout: {title: string; isPublic: boolean};
};

export type CommonScreensNavigationProp =
  AppNavigationProp<CommonScreensParamList>;

export type CommonScreensRouteProp<T extends keyof CommonScreensParamList> =
  AppRouteProp<CommonScreensParamList, T>;
