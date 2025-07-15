import React, {Component, PropsWithChildren, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {normalize} from '../utilities/normalize/normalize';
import {COLORS} from '../constants/Colors';

interface LoadingBarProps extends PropsWithChildren {
  isLoading: boolean;
  customStyle?: StyleProp<ViewStyle>;
}

const LoadingBar: React.FC<LoadingBarProps> = ({
  isLoading,
  children,
  customStyle,
}) => {
  return isLoading ? (
    <View style={StyleSheet.absoluteFillObject}>
      <View style={[styles.modelSubContainer, customStyle]}>
        <View style={styles.modelBgContainer}>
          <ActivityIndicator size="large" color={COLORS.primaryBlack} />
        </View>
      </View>
    </View>
  ) : (
    children
  );
};

export {LoadingBar};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  modelContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelSubContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelBgContainer: {
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 20,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: wp('2%'),
  },
  pleaseWaitTextStyle: {
    fontSize: normalize(16),
    fontFamily: 'Poppins-Regular',
    marginLeft: wp('5%'),
  },
});
