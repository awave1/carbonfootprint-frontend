/* eslint-disable react/no-unused-state */
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const WalkRoute = () => <Text>Carbon Summary</Text>;

const TransitRoute = () => <Text>Albums</Text>;

const CarRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      routes: [
        { key: 'walk', title: 'Walk', icon: 'walk' },
        { key: 'transit', title: 'Transit', icon: 'train' },
        { key: 'car', title: 'Car', icon: 'car' },
      ],
    };
    this.renderScene = BottomNavigation.SceneMap({
      walk: WalkRoute,
      transit: TransitRoute,
      car: CarRoute,
    });

    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  handleIndexChange(index) {
    this.setState({ index });
  }

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
      />
    );
  }
}
