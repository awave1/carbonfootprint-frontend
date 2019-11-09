/* eslint-disable react/no-unused-state */
import * as React from 'react';
import { Text } from 'react-native';
import { BottomNavigation, Title, View } from 'react-native-paper';
import SummarySheet from '../SummarySheet';

const WalkRoute = () => <SummarySheet />;

const TransitRoute = () => <Text>Albums</Text>;

const CarRoute = () => <Text>Recents</Text>;

export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
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
