import React from 'react';
import { View, Text } from 'react-native';

import Item from './Item';

const Items = (props) => {

  return (
    <View>

      <Text>
        Items
      </Text>
      {
        props.items.map( (item, key) => {
          return <Item item={item} key={key}></Item>
        })
      }
    </View>
  );
}

export default Items;