import React, { useState, useEffect } from 'react';
import { BottomNavigation } from 'react-native-material-ui';
import SummarySheet from '../SummarySheet';

function BottomBar({ bottomBarClick, origin }) {
  const [activeTab, setActiveTab] = useState('transit');
  const [modes, setModes] = useState({
    walk: {
      title: 'Walk',
    },
    transit: {
      title: 'Transit',
    },
    car: {
      title: 'Car',
    },
  });
  const [emissions, setEmissions] = useState('0');

  const getMode = tab => {
    switch (tab) {
      case 'car':
        return 'DRIVING';
      case 'walk':
        return 'WALKING';
      case 'transit':
        return 'TRANSIT';
      default:
        return 'TRANSIT';
    }
  };

  async function fetchEmissionsAndRoutes(tab) {
    const testLocation = '51.0516244,-114.0532057';
    const response = await fetch(
      `https://carbonfootprint-backend.herokuapp.com/api/routeAndEmissions?origin=${origin}&destination=${testLocation}`
    );

    const resp = await response.json();
    const forTransport = resp[getMode(tab)];
    const { polyCoords, totalEmissionsForRoute } = forTransport;

    setActiveTab(tab);
    setEmissions(totalEmissionsForRoute);
    bottomBarClick(polyCoords);
  }

  useEffect(() => {
    fetchEmissionsAndRoutes('transit');
  }, []);

  return (
    <>
      <SummarySheet title={modes[activeTab].title} txt={emissions} />
      <BottomNavigation active={activeTab} hidden={false}>
        <BottomNavigation.Action
          key="walk"
          icon="directions-walk"
          label="Walk"
          onPress={async () => fetchEmissionsAndRoutes('walk')}
        />
        <BottomNavigation.Action
          key="transit"
          icon="directions-transit"
          label="Transit"
          onPress={async () => fetchEmissionsAndRoutes('transit')}
        />
        <BottomNavigation.Action
          key="car"
          icon="directions-car"
          label="Car"
          onPress={async () => fetchEmissionsAndRoutes('car')}
        />
      </BottomNavigation>
    </>
  );
}

export default BottomBar;
