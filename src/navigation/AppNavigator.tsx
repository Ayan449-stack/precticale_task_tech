// AppNavigator.tsx

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
export const ONBOARDING_STACK = {
  SPLASHSCREEN: 'SplashScreen',
  ONBOARDINGSCREEN: 'OnboardingScreen',
  AUTHSTACK: 'AuthStack',
  HOMESTACK: 'HomeStack',
} as const;
// 👇 Define the stack's param list
export type OnboardingStackParamList = {
  SplashScreen: undefined;
  OnboardingScreen: undefined;
  AuthStack: undefined;
  HomeStack: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name={ONBOARDING_STACK.SPLASHSCREEN}
      component={SplashScreen}
    />
    <Stack.Screen
     name={ONBOARDING_STACK.ONBOARDINGSCREEN}
    component={OnboardingScreen}
    />
    <Stack.Screen name={ONBOARDING_STACK.AUTHSTACK} component={AuthStack} />
    <Stack.Screen name={ONBOARDING_STACK.HOMESTACK} component={HomeStack} />
  </Stack.Navigator>
);

export default AppNavigator;
