import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: wp('50%'),
    height: wp('50'),
    marginBottom: 20,
    borderRadius: 100,
  },
  appName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
