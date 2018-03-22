import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Items from './Items';
import Basket from './Basket';

import data from './data.json';

export default class Shop extends Component {
  render () {
    return (
      <View>
        <Basket />
        <Items items={data} />
      </View>
    )
  }
}
