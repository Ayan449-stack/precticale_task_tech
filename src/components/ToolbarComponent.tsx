import React from 'react';
import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { IC_BACK_ARROW } from '../constants/ImageConst';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { COLORS } from '../constants/Colors';

interface ToolbarProps {
  customStyle?: StyleProp<ViewStyle>;
  customTextIconStyle?: StyleProp<ViewStyle>;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export const ToolbarComponent: React.FC<ToolbarProps> = ({
  customStyle,
  customTextIconStyle,
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      {showBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackPress}
          activeOpacity={0.8}>
          <Image
            source={IC_BACK_ARROW}
            style={[styles.backIcon, customTextIconStyle]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('7%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: 8,
    backgroundColor: 'transparent',  // Set to transparent to allow the background image to show
    justifyContent: 'flex-start',    // Align items to the start to ensure space for back button
  },
  backButton: {
    marginRight: wp('2%'),
    height: '100%',
    width: wp('10%'),
    justifyContent: 'center',
  },
  backIcon: {
    width: wp('6.5%'),
    height: wp('6.5%'),
    alignSelf: 'center',
    tintColor: COLORS.primaryWhite,  // Make sure this is visible on the background
  },
  username: {
    flex: 1,
    fontSize: 20,
    color: COLORS.primaryBlack,
    fontFamily: 'Lato-Bold',
    paddingHorizontal: wp('2%'),
  },
  title: {
    flex: 0.89,
    textAlign: 'center',
    color: COLORS.primaryBlack,
    fontFamily: 'Roboto-Bold',
  },
});
