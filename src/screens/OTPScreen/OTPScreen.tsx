import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './Style';
import {ONBOARDING_STACK, OnboardingStackParamList} from '../../navigation/AppNavigator';



const OTPScreen = () => {
const navigation = useNavigation<NativeStackNavigationProp<OnboardingStackParamList>>();
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Code</Text>
      <Text style={styles.subtitle}>
        Enter the verification code that we have sent to your phone
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.resend}>Resend Code 🔁</Text>
      </TouchableOpacity>
      <PrimaryButton
        title="Continue"
        onPress={() =>  navigation.replace(ONBOARDING_STACK.HOMESTACK)} 
      />
      So your fin
      <Text style={styles.orText}>Or</Text>
      <PrimaryButton title="Connect Wallet" onPress={() => {}} />
    </View>
  );
};

export default OTPScreen;
