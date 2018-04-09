import React, { Component } from 'react';
import { Container, Header, Content, Icon, Text } from 'native-base';

import Items from './Items';
import Basket from './Basket';

import data from './data.json';

export default class Shop extends Component {
  state = {purchases: data}

  handlePurchases = (i, op) => {
    // i -> index de l'item ds mon tableau
    // op -> 1 ou -1
    let purchases = this.state.purchases; // -> data;
    (purchases[i].qtt ? purchases[i].qtt+=op : purchases[i].qtt=op );
    this.setState({purchases: purchases})
  }

  render () {
    return (
      <Container>
        <Header>
          <Text>
            My Awesome App
          </Text>
        </Header>
        <Basket purchases={this.state.purchases} />
        <Items items={this.state.purchases} hP={this.handlePurchases}/>
      </Container>
    )
  }
}
