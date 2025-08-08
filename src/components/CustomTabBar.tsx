// components/CustomTabBar.tsx
import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {COLORS} from '../constants/Colors';
import {IC_HOME, IC_MESSAGE, IC_USER, IC_WALLET} from '../constants/ImageConst';

const CustomTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        // Custom center button
        if (route.name === 'Post') {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.centerButton}>
              <Text style={styles.plus}>＋</Text>
            </TouchableOpacity>
          );
        }

        // Regular tabs
        const icon =
          route.name === 'Home'
            ? IC_HOME
            : route.name === 'Chat'
            ? IC_MESSAGE
            : route.name === 'Wallet'
            ? IC_WALLET
            : route.name === 'Profile'
            ? IC_USER
            : null;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}>
            {icon && (
              <Image
                source={icon}
                style={{
                  tintColor: isFocused ? COLORS.primaryBlueColor : COLORS.primaryWhite,
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#00142D',
    height: 70,
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  centerButton: {
    backgroundColor: COLORS.primaryBlueColor,
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primaryWhite,
  },
  plus: {
    color: COLORS.primaryWhite,
    fontSize: 30,
    lineHeight: 34,
    fontWeight: 'bold',
  },
});

export default CustomTabBar;
