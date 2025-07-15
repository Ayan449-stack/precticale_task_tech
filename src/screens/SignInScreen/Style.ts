import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    marginTop: hp('5%'),
    width: '100%',
    height: hp('35%'),
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  headerText: {
    color: COLORS.primaryBlack,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: hp('2%'),
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  // formContainer: {
  //   padding: 20,
  // },
  // signInBtn: {
  //   // marginBottom: 10,
  //   marginVertical: hp('3%'),
  // },
  // scrollViewContent: {
  //   flexGrow: 1,
  //   height: hp('40%'),
  //   paddingBottom: hp('4.5%'),
  // },
  // loginButton: {
  //   height: hp('6%'),
  //   width: '100%',
  //   backgroundColor: COLORS.primaryBlueColor,
  //   borderRadius: 8,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // loginButtonText: {
  //   color: COLORS.primaryWhite,
  //   fontSize: 16,
  //   fontWeight: '600',
  //   textTransform: 'none', // ensure text is not uppercased
  // },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  /** Logo **/
  logoContainer: {
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  appName: {
    fontSize: 34,
    fontWeight: '600',
    color: COLORS.primaryBlack,
    marginBottom: 10,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  /** Form **/
  formContainer: {
    marginTop: hp('3%'),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  forgotPasswordText: {
    color: COLORS.primaryGray,
    fontSize: 13,
  },

  /** Buttons **/
  signInBtn: {
    marginTop: hp('2%'),
    alignSelf: 'flex-end',
  },
  loginButton: {
    width: wp('30%'),
    height: hp('6%'),
    backgroundColor: COLORS.prmaryButtonColor, // Green
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.primaryWhite,
    fontSize: 16,
    fontWeight: '600',
  },

  /** Sign Up **/
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: hp('1.5%'),
  },
  signUpText: {
    color: COLORS.primaryBlack,
    fontSize: 14,
  },
  signUpLink: {
    color: COLORS.primaryBlack,
    fontWeight: '600',
  },

  /** Social Login **/
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('3%'),
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.secondoryBlack,
  },
  orText: {
    marginHorizontal: 10,
    color: COLORS.primaryGray,
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: hp('2%'),
  },
  socialButton: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },

  /** Guest **/
  guestContainer: {
    alignSelf: 'flex-end',
    marginTop: hp('2%'),
  },
  guestText: {
    color: COLORS.primaryGray,
    fontSize: 14,
  },
});
