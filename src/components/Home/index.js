import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}