/* eslint-disable react/sort-comp */
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

    // this.ontabclicked;
  }

  async ontabclicked(activeTab) {
    this.setState({ active: activeTab });
    const response = await fetch(
      'https://carbonfootprint-backend.herokuapp.com/api/routeAndEmissions?origin=51.0393044,-114.136155&destination=51.0516244,-114.0532057'
    );

    console.log(response);
  }

  async componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    await this.ontabclicked(this.state.active);
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
            onPress={async () => this.ontabclicked('walk')}
          />
          <BottomNavigation.Action
            key="transit"
            icon="directions-transit"
            label="Transit"
            onPress={async () => this.ontabclicked('transit')}
          />
          <BottomNavigation.Action
            key="car"
            icon="directions-car"
            label="Car"
            onPress={async () => this.ontabclicked('car')}
          />
        </BottomNavigation>
      </>
    );
  }
}
