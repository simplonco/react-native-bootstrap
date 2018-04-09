import React from 'react';
import { ScrollView } from 'react-native';

import Item from './Item';

const Items = (props) => {
  return (
    <ScrollView>
      {
        props.items.map( (item, i) => {
          return <Item product={item} key={i} i={i} hP={props.hP}/>
        })
      }
    </ScrollView>
  )
}

export default Items;