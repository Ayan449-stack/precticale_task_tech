import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  cameraPreview: {
    flex: 1,
  },
  closeBtn: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('5%'),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: wp('7%') / 2,
    width: wp('7%'),
    height: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: wp('6%'),
    color: COLORS.primaryWhite,
  },
 bottomSection: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  paddingBottom: hp('2%'),
  alignItems: 'center',
  backgroundColor: 'transparent', 
},
  filterOptions: {
    flexDirection: 'row',
    marginBottom: hp('1.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {
    color: COLORS.primaryWhite,
    fontSize: wp('4%'),
    marginHorizontal: wp('3%'),
  },
  activeFilter: {
    backgroundColor: COLORS.primaryWhite,
    color: COLORS.primaryBlack,
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('5%'),
    overflow: 'hidden',
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: hp('1.5%'),
  },
  sideIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('25%'),
    justifyContent: 'space-around',
  },
  thumbnail: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('2%'),
  },
  icon: {
    width: wp('8%'),
    height: wp('8%'),
    tintColor: COLORS.primaryWhite,
  },
  captureButton: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    borderWidth: 5,
    borderColor: COLORS.primaryWhite,
    backgroundColor: COLORS.primaryWhite,
  },
  modeOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('1%'),
  },
  modeText: {
    color: COLORS.primaryWhite,
    fontSize: wp('4%'),
    marginHorizontal: wp('5%'),
  },
  activeMode: {
    color: COLORS.primaryBlueColor,
    fontWeight: 'bold',
  },

modalOverlay: {
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(0,0,0,0.4)',
},
bottomSheet: {
  backgroundColor: 'rgba(6, 19, 33, 0.95)', // deep navy with transparency
  borderTopLeftRadius: wp('5%'),
  borderTopRightRadius: wp('5%'),
  paddingTop: hp('2%'),
  paddingHorizontal: wp('4%'),
  maxHeight: hp('50%'),
},
searchBar: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.1)',
  borderRadius: wp('3%'),
  paddingHorizontal: wp('3%'),
  paddingVertical: hp('1%'),
  marginBottom: hp('2%'),
},
searchIcon: {
  fontSize: wp('5%'),
  color: COLORS.primaryWhite,
  marginRight: wp('2%'),
},
searchPlaceholder: {
  color: COLORS.primaryWhite,
  opacity: 0.7,
  fontSize: wp('4%'),
},
emojiGrid: {
  paddingBottom: hp('2%'),
},
emojiItem: {
  flex: 1,
  alignItems: 'center',
  marginVertical: hp('1%'),
},
emojiText: {
  fontSize: wp('8%'),
},
});
