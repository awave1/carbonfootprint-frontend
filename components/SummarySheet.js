import React from 'react';
import { View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

function SummarySheet() {
  const renderContent = () => {};

  const renderHeader = () => {};

  return (
    <View>
      <BottomSheet snapPoints={[450, 300, 0]} renderContent={renderContent} renderHeader={renderHeader} />
    </View>
  );
}

export default SummarySheet;
