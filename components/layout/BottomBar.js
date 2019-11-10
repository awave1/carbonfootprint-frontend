/* eslint-disable react/no-unused-state */
import * as React from 'react';
import { View, Text, Container, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';
import SummarySheet from '../SummarySheet';

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
  },
});
export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'transit',
      modes: {
        walk: {
          title: 'Walk',
        },
        transit: {
          title: 'Transit',
        },
        car: {
          title: 'Car',
        },
      },
    };
  }

  render() {
    const { active, modes } = this.state;
    return (
      <>
        <SummarySheet title={modes[active].title} />
        <BottomNavigation active={active} hidden={false}>
          <BottomNavigation.Action
            key="walk"
            icon="directions-walk"
            label="Walk"
            onPress={() => this.setState({ active: 'walk' })}
          />
          <BottomNavigation.Action
            key="transit"
            icon="directions-transit"
            label="Transit"
            onPress={() => this.setState({ active: 'transit' })}
          />
          <BottomNavigation.Action
            key="car"
            icon="directions-car"
            label="Car"
            onPress={() => this.setState({ active: 'car' })}
          />
        </BottomNavigation>
      </>
    );
  }
}
