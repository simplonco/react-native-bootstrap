import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Icon, List, ListItem, Button } from 'native-base';

export default class Basket extends React.Component {

  state = {expanded: false}

  toggle = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render () {

    total = this.props.purchases
              .map( p => p.qtt ? p.qtt * p.price : 0)
              .reduce( (total, add) => total + add);

    expanded = this.state.expanded ? (
      <Container>
        <Content>
          <List>
            {
              this.props.purchases
                .filter( p => (p.qtt && p.qtt > 0 ) )
                .map( p => <ListItem><Text>{p.name} : {p.qtt}</Text></ListItem>)
            }
          </List>
          <Text>Total : {total}</Text>
        </Content>
      </Container>
    ) : null;

    return (
      <Container>
        <Button transparent  onPress={this.toggle}>
          <Icon name="basket"/>
        </Button>
        {expanded}
      </Container>
    )
  }
}