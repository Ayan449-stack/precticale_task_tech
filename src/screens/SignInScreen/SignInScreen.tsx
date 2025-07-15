import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import {
  IC_APPLE,
  IC_FACEBOOK,
  IC_GOOGLE,
  IC_LOGIN,
} from '../../constants/ImageConst';
import {ONBOARDING_STACK} from '../../navigation/AppNavigator';
import {useAppDispatch} from '../../state/hooks';
import {styles} from './Style';
// import {login} from '../../state/auth';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Snackbar from 'react-native-snackbar';
import {LoadingBar} from '../../components/LoadingBar';
import {OnboardingStackParamList} from '../../navigation/AppNavigator';
import {callLoginAPI} from '../../services/auth';
import {setUserData} from '../../state/user';
const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pinModalVisible, setPinModalVisible] = useState(false);
  const isFocused = useIsFocused();
  const [deviceId, setDeviceId] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<OnboardingStackParamList>>();

  useEffect(() => {
    if (isFocused) {
      resetAllStates();
    }
    // navigation.replace(ONBOARDING_STACK.HOMESTACK);
  }, [isFocused]);

  const resetAllStates = () => {
    setUsername('');
    setPassword('');
    setErrorEmail(null);
    setErrorPassword(null);
  };

  const handleLogin = async () => {
    console.log('deviceId', deviceId);
    try {
      const data = await callLoginAPI({
        email: username,
        password: password,
      });
      if (data) {
        console.log('login Successfull', JSON.stringify(data));
        dispatch(
          setUserData({
            token: data.data.token,
            username: data.data.user.usr_username,
          }),
        );
        Snackbar.show({
          text: data?.message,
          duration: Snackbar.LENGTH_SHORT,
        });
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.replace(ONBOARDING_STACK.HOMESTACK);
      }
    } catch (error) {
      console.log('Error logging in:', JSON.stringify(error));
    }

    // if (!username || !password) {
    //   Alert.alert(
    //     'Validation Error',
    //     'Please enter both username and password',
    //   );
    //   return;
    // }

    //   Keyboard.dismiss();
    //   setLoading(true);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {/* <View style={styles.scrollViewContent}>
            <ImageBackground
              source={IC_LOGIN}
              style={styles.backgroundImage}
              resizeMode="cover"></ImageBackground>

            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <View style={styles.formContainer}>
                <Text style={styles.headerText}>Login</Text>
                <CustomTextInput
                  label="User Name"
                  placeholder="Enter User Name"
                  value={username}
                  isRequired={false}
                  onChangeText={setUsername}
                />
                <CustomTextInput
                  label="Password"
                  placeholder="Enter Password"
                  secureTextEntry
                  value={password}
                  isRequired={false}
                  onChangeText={setPassword}
                />

                <View style={styles.signInBtn}>
                  <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Log in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View> */}

          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {/* App Logo & Name */}
            <View style={styles.logoContainer}>
              <Text style={styles.appName}>Pliē</Text>
              <View style={styles.logoBox}>
                {/* Replace with your actual image */}
                <ImageBackground
                  source={IC_LOGIN}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              <CustomTextInput
                label="Email"
                placeholder="email@email.com"
                value={username}
                isRequired={false}
                onChangeText={setUsername}
              />
              <CustomTextInput
                label="Password"
                placeholder="Password"
                secureTextEntry
                value={password}
                isRequired={false}
                onChangeText={setPassword}
              />

              {/* Forgot Password */}
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Sign In Button */}
              <View style={styles.signInBtn}>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              {/* Sign Up */}
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Not a member? </Text>
                <TouchableOpacity>
                  <Text style={styles.signUpLink}>Sign up here</Text>
                </TouchableOpacity>
              </View>

              {/* Social Login */}
              <View style={styles.orContainer}>
                <View style={styles.divider} />
                <Text style={styles.orText}>or Sign in with</Text>
                <View style={styles.divider} />
              </View>
              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={IC_GOOGLE} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={IC_APPLE} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={IC_FACEBOOK} style={styles.socialIcon} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Enter as Guest */}
            <TouchableOpacity style={styles.guestContainer}>
              <Text style={styles.guestText}>Enter as Guest</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
        {loading && <LoadingBar isLoading={loading} />}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;
