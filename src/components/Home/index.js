import React, { Component } from "react";
import AuthService from '../../services/AuthService';
import { Button, Container, Text } from "native-base";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }
  send = () => {
    let token = this.authService.refreshToken();
    console.warn(token);
    
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