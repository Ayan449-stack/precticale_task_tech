// SplashScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  ONBOARDING_STACK,
  OnboardingStackParamList,
} from '../../navigation/AppNavigator';
import {styles} from './Style';

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<
    OnboardingStackParamList,
    'SplashScreen'
  >;
};
const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          // If the user is logged in, navigate directly to the home screen
          navigation.replace(ONBOARDING_STACK.HOMESTACK);
        } else {
          // If the user is not logged in, show the login screen
          navigation.replace(ONBOARDING_STACK.AUTHSTACK);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    // Set a timeout to check the login status after 3 seconds
    const timer = setTimeout(() => {
      checkLoginStatus();
    }, 3000); // 3 seconds splash screen

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Image source={IC_SPLASH} style={styles.logo} /> */}
      <Text style={styles.appName}>plie</Text>
    </View>
  );
};

export default SplashScreen;
