/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Provider as PaperProvider } from 'react-native-paper';
import '@mapbox/polyline';
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

  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 51.0447,
            longitude: -114.0719,
            latitudeDelta: 0.03,
            longitudeDelta: 0.05,
          }}
        >
          <MapView.Polyline coordinates={coords} strokeWidth={2} strokeColor="red" />
        </MapView>
        <BottomBar bottomBarClick={c => setCoords(c)} />
      </View>
    </PaperProvider>
  );
}

export default App;
