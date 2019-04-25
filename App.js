import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from './src/components/Splash';
import Register from './src/components/Register';
import Home from './src/components/Home';
import { Root } from "native-base";

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash
  },
  Register: {
    screen: Register
  },
  Home: {
    screen: Home
  }
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <Root><AppContainer /></Root>;
  }
}
