/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { TextInput, Provider as PaperProvider, Provider } from 'react-native-paper';
// import Geolocation from '@react-native-community/geolocation';
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
    flex: 38,
    zIndex: 1,
  },
  searchFieldTop: {
    marginLeft: 16,
    marginRight: 16,
  },
  searchField: {
    marginLeft: 16,
    marginRight: 16,
  },
  searchFields: {
    backgroundColor: 'transparent',
    paddingTop: 38,
    flex: 12,
    zIndex: 1,
  },
});

// Geolocation.getCurrentPosition(info => console.log(info));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
    this.watchID = undefined;
  }

  componentDidMount() {
    // Geolocation.getCurrentPosition(
    //   position => {
    //     const initialPosition = JSON.stringify(position);
    //     this.setState({ initialPosition });
    //   },
    //   error => Alert.alert('Error', JSON.stringify(error)),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    // );
    // this.watchID = Geolocation.watchPosition(position => {
    //   const lastPosition = JSON.stringify(position);
    //   this.setState({ lastPosition });
    // });
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-unused-expressions
    // this.watchID !== undefined && Geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <View style={styles.searchFields}>
            <TextInput style={styles.searchFieldTop} mode="outlined" label="From" />
            <TextInput style={styles.searchField} mode="outlined" label="To" />
          </View>
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
      </PaperProvider>
    );
  }
}

export default App;
