import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

const Item = (props) => {

  addItem = () => {
    props.hP(props.i, 1);
  }

  removeItem = () => {
    props.hP(props.i, -1);
  }

  imgUrl = "https://source.unsplash.com/random";

  return (
    <Card style={{flex: 0}}>
      <CardItem>
        <Left>
          <Body>
            <Text>{props.product.name}</Text>
            <Text note>provenance</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={{uri : imgUrl}} style={{height: 200, width: null, flex: 1, alignSelf: 'stretch'}}/>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Text>{props.product.price}€</Text>
        </Left>
        <Right>
          <Button transparent onPress={addItem}>
            <Icon name="add-circle" />
          </Button>
          {
            !!props.product.qtt &&
            <Button transparent onPress={removeItem}><Icon name="remove-circle" /></Button>
          }
        </Right>
      </CardItem>
    </Card>
  )
}

export default Item;