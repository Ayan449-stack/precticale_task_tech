import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {COLORS} from '../constants/Colors';
import {
  IC_CALENDER,
  IC_FAVORITE,
  IC_SEARCH,
  IC_USER,
} from '../constants/ImageConst';
import EventScreen from '../screens/EventScreen/EventScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Search from '../screens/Search/Search';

// Tab route names
export const TAB_ROUTES = {
  SEARCH: 'Search',
  EVENT: 'Event',
  FAVORITES: 'Favorites',
  PROFILE: 'Profile',
} as const;

export type TabParamList = {
  Search: undefined;
  Event: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={TAB_ROUTES.EVENT}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.prmaryButtonColor,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          borderTopWidth: 0.5,
          borderTopColor: '#ddd',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconSource;

          if (route.name === TAB_ROUTES.SEARCH) {
            iconSource = IC_SEARCH;
          } else if (route.name === TAB_ROUTES.EVENT) {
            iconSource = IC_CALENDER;
          } else if (route.name === TAB_ROUTES.FAVORITES) {
            iconSource = IC_FAVORITE;
          } else if (route.name === TAB_ROUTES.PROFILE) {
            iconSource = IC_USER;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? COLORS.prmaryButtonColor
                    : COLORS.primaryBlack,
                },
              ]}
            />
          );
        },
      })}>
      <Tab.Screen name={TAB_ROUTES.SEARCH} component={Search} />
      <Tab.Screen name={TAB_ROUTES.EVENT} component={EventScreen} />
      <Tab.Screen name={TAB_ROUTES.FAVORITES} component={FavoritesScreen} />
      <Tab.Screen name={TAB_ROUTES.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default HomeTabs;
