import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    zIndex: 3,
  },
  panelContainer: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

function SummarySheet({ title }) {
  const renderContent = () => {
    return (
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>{title}</Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  };

  const bs = React.createRef();
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[250, 50, 50]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        initialSnap={1}
      />
    </View>
  );
}

export default SummarySheet;
