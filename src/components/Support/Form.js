import React, { Component } from "react";
import { Container, Text, View, Button } from "native-base";

export default class Form extends Component {
  render() {
    return (
        <Container>
            <View>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Text style={styles.contentTitle}>farshad</Text>
            <Button success
                onPress={() => this.toggleModal()}
                title="Close"
            ><Text>sdfsdfsd</Text></Button>
            </View>
        </Container>
    );
  }
}
