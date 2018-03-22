import React from 'react';
import { View, Text } from 'react-native';

import Item from './Item';

/*
{
  items: data
}
*/
const Items = (props) => {
  return (
    <View>
      <Text>
        ITEMS
      </Text>
      {
        props.items.map( (item) => {
          return <Item product={item} />
        })
      }
    </View>
  )
}

export default Items;