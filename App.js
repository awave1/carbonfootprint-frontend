/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Provider as PaperProvider } from 'react-native-paper';
import '@mapbox/polyline';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import BottomBar from './components/layout/BottomBar';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  map: {
    flex: 38,
    zIndex: 1,
  },
});

function App() {
  const [coords, setCoords] = useState([]);
  const [location, setLocation] = useState({
    latitude: 51.0447,
    longitude: -114.0719,
    latitudeDelta: 0.03,
    longitudeDelta: 0.05,
  });

  const getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.05,
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={location}>
          <MapView.Polyline coordinates={coords} strokeWidth={2} strokeColor="red" />
        </MapView>
        <BottomBar origin={`${location.latitude},${location.longitude}`} bottomBarClick={c => setCoords(c)} />
      </View>
    </PaperProvider>
  );
}

export default App;
