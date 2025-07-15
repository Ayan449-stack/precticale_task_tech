import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeTabs from './HomeTabs';

// 👇 Route name constants with literal types
// export const HOME_STACK = {
//   HOMESCREEN: 'HomeScreen',
//   USERDETAILSCREEN: 'UserDetailScreen',
// } as const;

export const HOME_STACK = {
  HOMETABS: 'HomeTabs',
  USERDETAILSCREEN: 'UserDetailScreen',
} as const;

// 👇 Define the param list
// export type HomeStackParamList = {
//   HomeScreen: undefined;
//   UserDetailScreen: undefined;
// };

export type HomeStackParamList = {
  HomeTabs: undefined;
  UserDetailScreen: undefined;
};

// 👇 Create typed navigator
const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_STACK.HOMETABS} component={HomeTabs} />
      {/* <Stack.Screen
        name={HOME_STACK.USERDETAILSCREEN}
        component={UserDetailScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
