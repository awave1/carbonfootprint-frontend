/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'walk',
    };
  }

  render() {
    return (
      <BottomNavigation active={this.state.active} hidden={false}>
        <BottomNavigation.Action
          key="walk"
          icon="directions-walk"
          label="Walk"
          onPress={() => this.setState({ active: 'walk' })}
        />
        <BottomNavigation.Action
          key="car"
          icon="directions-car"
          label="Car"
          onPress={() => this.setState({ active: 'car' })}
        />
        <BottomNavigation.Action
          key="transit"
          icon="directions-transit"
          label="Transit"
          onPress={() => this.setState({ active: 'transit' })}
        />
        <BottomNavigation.Action
          key="bike"
          icon="directions-bike"
          label="Bike"
          onPress={() => this.setState({ active: 'bike' })}
        />
      </BottomNavigation>
    );
  }
}

export default BottomBar;
