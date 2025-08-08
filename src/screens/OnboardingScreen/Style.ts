import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  illustration: {
    width: wp('80%'),
    height: hp('40%'),
    bottom: hp('10%'),
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: COLORS.primaryTextColor,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 24,
    color: COLORS.primaryWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.primaryBlueColor,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 30,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.primaryWhite,
    fontSize: 16,
    fontWeight: '300',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
  },
});
