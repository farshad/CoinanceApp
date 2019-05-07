import React, { Component } from "react";
import UserService from '../../services/UserService'
import { Button, Container, Text } from "native-base";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
  }
  send = () => {
    this.userService.getCurrent().then((res) => {
      console.warn(res);
    });
    
  }
  render() {
    return (
        <Container>
          <Button onPress={() => this.send()}>
          <Text>send</Text>

          </Button>
        </Container>
    );
  }
}