import React, { Component } from "react";
import { Container, Text, Button } from "native-base";

export default class Profile extends Component {
  render() {
    return (
        <Container>
            <Text>profile screen</Text>      
            <Button
            onPress={() => this.props.navigation.navigate("Update")}>
            <Text>update</Text>
          </Button>
        </Container>
    );
  }
}
