import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000D1A',
    padding: 24,
    justifyContent: 'center',
  },
  logo: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    marginBottom: 30,
  },
  heading: {
    color: COLORS.primaryWhite,
    fontSize: 16,
    marginBottom: 20,
  },
  inputWrapper: {
    backgroundColor: '#1E2A38',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  input: {
    height: 48,
    color: COLORS.primaryWhite,
  },
  orText: {
    color: COLORS.primaryWhite,
    textAlign: 'center',
    marginVertical: 16,
  },
  connectText: {
    color: COLORS.primaryWhite,
    fontSize: 14,
    marginBottom: 10,
  },
  policy: {
    color: COLORS.primaryWhite,
    fontSize: 12,
    marginBottom: 20,
  },
  containerStyle: {
    backgroundColor: COLORS.primaryWhite,
  },
  textStyle: {
    color: COLORS.secondoryBlue,
  },
});
