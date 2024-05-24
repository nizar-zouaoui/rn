import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useMemo} from 'react';
import Workout from '../../screens/CommonScreensStack/Workout';
import React from 'react';

const createStackWrapper = () => createNativeStackNavigator<any>();
// TODO continue commons screens implementation
export const useCommonScreens = (
  NativeStack: ReturnType<typeof createStackWrapper>,
) => {
  const commonScreens = useMemo(() => {
    return (
      <>
        <NativeStack.Screen name="Workout" component={Workout} />
      </>
    );
  }, [NativeStack]);

  return commonScreens;
};
