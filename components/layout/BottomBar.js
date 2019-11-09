import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';

class BottomBar extends Component {

    constructor() {
        this.state = {
            active: 'walk'
        }
    }
    render() {
        <BottomNavigation active={this.state.active} hidden={false}>
            <BottomNavigation.Action
                key="walk"
                icon="walk"
                label="walk"
                onPress={() => this.setState({ active: 'walk' })}
            />
            <BottomNavigation.Action
                key="car"
                icon="car"
                label="car"
                onPress={() => this.setState({ active: 'car' })}
            />
            <BottomNavigation.Action
                key="transit"
                icon="transit"
                label="transit"
                onPress={() => this.setState({ active: 'transit' })}
            />
            <BottomNavigation.Action
                key="bike"
                icon="bike"
                label="bike"
                onPress={() => this.setState({ active: 'bike' })}
            />
        </BottomNavigation>
    }


    export default BottomBar;