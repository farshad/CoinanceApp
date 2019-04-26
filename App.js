import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from './src/components/Splash';
import Register from './src/components/Register';
import Home from './src/components/Home';
import { Root } from "native-base";
import i18n from './src/i18n';

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      title: i18n.t('login.title'),
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#FFF'
      },
      headerTitleStyle: {
        color: "#3a3a3a",
        textAlign: "center",
        flex: 1,
        elevation: 0,
        fontSize: 15,
        justifyContent: "center"
      }
    })
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
