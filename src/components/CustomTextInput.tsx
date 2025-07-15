// components/CustomTextInput.js
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS} from '../constants/Colors';
import {IC_HIDE, IC_VIEW} from '../constants/ImageConst';
interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: TextInputProps['keyboardType']; // Optional, defaults to 'default'
  secureTextEntry?: boolean; // Optional, for password fields
  multiline?: boolean; // Optional, for text area
  isRequired?: boolean; // Optional, for text area
  numberOfLines?: number; // Optional, to control the number of lines for text area
}

interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  multiline?: boolean;
  isRequired?: boolean;
  numberOfLines?: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  multiline = false,
  isRequired = true,
  numberOfLines = 1,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {label ? (
        <Text style={styles.label}>
          {label}
          <Text style={styles.required}>{isRequired ? '*' : ''}</Text>
        </Text>
      ) : null}

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          style={styles.input}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />

        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible ? (
              <Image source={IC_HIDE} style={styles.eyeIconStyle} />
            ) : (
              <Image source={IC_VIEW} style={styles.eyeIconStyle} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: COLORS.primaryBlack,
    fontWeight: '500',
    fontSize: 18,
  },
  required: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: COLORS.primaryGray,
  },
  eyeIcon: {
    padding: 4,
  },
  eyeIconStyle: {
    height: wp('5%'),
    width: wp('5%'),
  },
});

export default CustomTextInput;
