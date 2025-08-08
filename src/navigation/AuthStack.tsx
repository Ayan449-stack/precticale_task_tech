import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import OTPScreen from '../screens/OTPScreen/OTPScreen';

// 👇 Strongly typed route names
export const AUTH_STACK = {
  SIGN_IN_SCREEN: 'SignInScreen',
  LOGIN_SCREEN: 'LoginScreen',
  OTP_SCREEN: 'OTPScreen',
} as const;

// 👇 Define param list for each screen in this stack
export type AuthStackParamList = {
  SignInScreen: undefined;
  LoginScreen: undefined;
  OTPScreen: undefined;
};

// 👇 Create stack navigator with typed param list
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={AUTH_STACK.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={AUTH_STACK.OTP_SCREEN} component={OTPScreen} />
  </Stack.Navigator>
);

export default AuthStack;
