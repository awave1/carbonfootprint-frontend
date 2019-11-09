import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import BottomBar from './components/layout/BottomBar';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  map: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
  },
  inputSearch: {
    borderColor: 'white',
    height: 40,
    width: '90%',
    borderRadius: 5,
  },
});

const App = () => (
  <View style={styles.container}>
    {/* <Callout> */}
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputSearch} placeholder="From" />
      <TextInput style={styles.inputSearch} placeholder="To" />
    </View>
    {/* </Callout> */}
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
    <BottomBar />
  </View>
);

export default App;
