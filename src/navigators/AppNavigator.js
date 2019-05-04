import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator} from "react-navigation";
import Splash from '../components/Splash';
import VerificationCode from '../components/Register/VerificationCode';
import Verify from '../components/Register/Verify';
import SendAgain from '../components/Register/Verify/SendAgain';
import Register from '../components/Register';
import { Root } from "native-base";
import i18n from '../i18n';
import TabNavigator from './TabNavigator';

const MainNavigator = createSwitchNavigator({
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
  Tab: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class AppNavigator extends Component {
  render() {
    return <Root><AppContainer /></Root>;
  }
}
