import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { IC_APP, IC_LIST, IC_NOTIFICATION, IC_SEARCH } from '../constants/ImageConst';

const TopBar = () => {
  return (
    <View style={styles.container}>
      {/* Left Logo */}
      <Image
        source={IC_APP} // your logo image
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Right Icons */}
      <View style={styles.iconGroup}>
        <TouchableOpacity>
          <Image
            source={IC_SEARCH}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={IC_LIST}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bellWrapper}>
          <Image
            source={IC_NOTIFICATION}
            style={styles.icon}
            resizeMode="contain"
          />
          {/* Red dot */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020E24',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logo: {
    width: 32,
    height: 32,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    marginLeft: 20,
  },
  bellWrapper: {
    position: 'relative',
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: -3,
    right: -3,
  },
});
