import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Shop from './components/Shop';

export default class App extends Component {
  render () {
    return (
      <ScrollView>
        <Shop />
      </ScrollView>
    )
  }
}
