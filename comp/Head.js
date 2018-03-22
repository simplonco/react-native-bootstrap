import React from 'react';
import { View, Text } from 'react-native';

import { Header } from 'native-base';

const Head = () => {
  return (
    <View>
      <Header>
        <Text>
          My awesome app
        </Text>
      </Header>
    </View>
  );
}

export default Head;