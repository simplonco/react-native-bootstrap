import React from 'react';
import { View } from 'react-native';

const Item = (props) => {
  return (
    <View>
      <Text>
        {props.item.name}
        {props.item.price}
      </Text>
    </View>
  );
}

export default Item;