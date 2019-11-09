import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { TextInput, Provider as PaperProvider, Provider } from 'react-native-paper';
import BottomBar from './components/layout/BottomBar';
import AutoComplete from './components/AutoComplete';

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
    ...StyleSheet.absoluteFillObject,
  },
  searchFieldTop: {
    marginTop: 38,
    marginLeft: 16,
    marginRight: 16,
  },
  searchField: {
    marginLeft: 16,
    marginRight: 16,
  },
});

const App = () => (
  <PaperProvider>
    <View style={styles.container}>
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
      <View>
        <TextInput style={styles.searchFieldTop} mode="outlined" label="From" />
        <TextInput style={styles.searchField} mode="outlined" label="To" />
      </View>
      <BottomBar />
    </View>
  </PaperProvider>
);

export default App;
