import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/SignInScreen/SignInScreen';

// 👇 Strongly typed route names
export const AUTH_STACK = {
  SIGN_IN_SCREEN: 'SignInScreen',
} as const;

// 👇 Define param list for each screen in this stack
export type AuthStackParamList = {
  SignInScreen: undefined;
};

// 👇 Create stack navigator with typed param list
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={AUTH_STACK.SIGN_IN_SCREEN} component={SignInScreen} />
  </Stack.Navigator>
);

export default AuthStack;
