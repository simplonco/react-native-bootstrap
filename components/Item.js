import React from 'react';
import { View, Text } from 'react-native';

const Item = (props) => {
  return (
    <Text>
      {props.product.name}
      {props.product.price}
    </Text>
  )
}

export default Item;