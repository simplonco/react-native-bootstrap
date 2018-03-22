import React from 'react';
import { View, Text } from 'react-native';

import Items from './Items';
import Basket from './Basket';

import data from './data.json';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: data};
  }

  render () {
    return (
      <View>
        <Text>
          Shop
        </Text>
        <Items items={this.state.items}/>
      </View>
    );
  }
}

export default Shop;