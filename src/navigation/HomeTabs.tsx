// HomeTabs.tsx
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen'; 
import CustomTabBar from '../components/CustomTabBar';
import PostScreen from '../screens/PostScreen/PostScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import WalletScreen from '../screens/WalletScreen/WalletScreen';

export const TAB_ROUTES = {
  HOME: 'Home',
  SEARCH: 'Search',
  POST: 'Post',
  CHAT: 'Chat',
  WALLET: 'Wallet',
  FAVORITES: 'Favorites',
  PROFILE: 'Profile',
} as const;

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Chat: undefined;
  Wallet: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={TAB_ROUTES.HOME}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={TAB_ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={TAB_ROUTES.CHAT} component={ChatScreen} />
      <Tab.Screen name={TAB_ROUTES.POST} component={PostScreen} />
      <Tab.Screen name={TAB_ROUTES.WALLET} component={WalletScreen} />
      <Tab.Screen name={TAB_ROUTES.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
