import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeTabs from './HomeTabs';


export const HOME_STACK = {
  HOMETABS: 'HomeTabs',
} as const;


export type HomeStackParamList = {
  HomeTabs: undefined;
};

// 👇 Create typed navigator
const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_STACK.HOMETABS} component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default HomeStack;
