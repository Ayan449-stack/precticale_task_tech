import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: wp('50%'),
    height: wp('50%'),
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color:COLORS.primaryWhite,
  },
});
