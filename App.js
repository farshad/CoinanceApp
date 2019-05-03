import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from './src/components/Splash';
import VerificationCode from './src/components/Register/VerificationCode';
import Verify from './src/components/Register/Verify';
import SendAgain from './src/components/Register/Verify/SendAgain';
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
  VerificationCode: {
    screen: VerificationCode,
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
  Verify: {
    screen: Verify,
    navigationOptions: () => ({
      title: i18n.t('verify.title'),
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
  SendAgain: {
    screen: SendAgain,
    navigationOptions: () => ({
      title: i18n.t('verify.sendAgain'),
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
  Register: {
    screen: Register,
    navigationOptions: () => ({
      title: i18n.t('register.title'),
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
