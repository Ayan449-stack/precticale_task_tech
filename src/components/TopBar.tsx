import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Colors';

interface TopBarProps {
  userName: string;
}

const TopBar: React.FC<TopBarProps> = ({userName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello {userName}!</Text>
      <Text style={styles.subText}>Are you ready to dance?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhite,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primaryBlack,
  },
  subText: {
    fontSize: 14,
    color: '#7d7d7d',
    marginTop: 4,
  },
});

export default TopBar;
