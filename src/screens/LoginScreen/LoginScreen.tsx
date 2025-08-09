import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import { IC_APP } from '../../constants/ImageConst';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AUTH_STACK, AuthStackParamList } from '../../navigation/AuthStack';
import { styles } from './Style';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'LoginScreen'
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleGetOTP = () => {
    navigation.navigate(AUTH_STACK.OTP_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Image
        source={IC_APP} // use your logo
        style={styles.logo}
      />

      <Text style={styles.heading}>Sign Up/Sign in to your account</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="+91  Phone"
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
        />
      </View>

      <PrimaryButton title="Get OTP" onPress={handleGetOTP} />

      <Text style={styles.orText}>Or</Text>

      <Text style={styles .connectText}>Connect to a wallet ↓</Text>
      <Text style={styles.policy}>
        By connecting a wallet, you agree to Lorem Ipsum Terms of Service and
        acknowledge that you have read and understand the Privacy Policy.
      </Text>

      <PrimaryButton title="Connect Wallet" onPress={()=>{}} containerStyle={styles.containerStyle} textStyle={styles.textStyle} />
    </View>
  );
};

export default LoginScreen;

