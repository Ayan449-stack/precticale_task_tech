import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';
import {styles} from './Style';

const UserDetailScreen = () => {
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    const requestPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.warn('Location permission denied');
          return;
        }
      }
      // getCurrentLocation();
    };

    // const getCurrentLocation = () => {
    //   navigator.geolocation.getCurrentPosition(
    //     position => {
    //       const {latitude, longitude} = position.coords;
    //       setRegion({
    //         latitude,
    //         longitude,
    //         latitudeDelta: 0.01,
    //         longitudeDelta: 0.01,
    //       });
    //     },
    //     error => {
    //       console.error('Error getting location:', error);
    //     },
    //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    //   );
    // };

    requestPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Details</Text>
      <View style={styles.card}>
        <Text style={styles.description}>
          This map shows your current location using native GPS without Google
          Maps API.
        </Text>

        {region && (
          <MapView style={styles.map} initialRegion={region}>
            <Marker coordinate={region} title="You are here" />
          </MapView>
        )}

        <Text style={styles.latLong}>
          {region
            ? `Lat: ${region.latitude.toFixed(
                6,
              )}, Lng: ${region.longitude.toFixed(6)}`
            : 'Loading location...'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserDetailScreen;
