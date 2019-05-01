import React, { Component } from "react";
import { Button, Content,Text, Toast } from 'native-base';
import styles from "../styles";
import i18n from '../../../i18n';
import RegisterService from '../../../services/RegisterService';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SendAgain extends Component {
  constructor(props){
    super(props);
    this.registerService = new RegisterService();
    this.state = {mobile: this.props.navigation.state.params.mobile};
  }
  sendAgain = () => {
    this.registerService.getVerficationCode(this.state.mobile)
    .then((res) => {
      this.props.navigation.navigate('Home');
    }).catch((err) => {
      if(err.status == '400'){
        Toast.show({
          text: err.message,
          type: 'danger'
        });
      }
     console.log(err);
    });
  }
  changeMobile = () => {
      this.props.navigation.replace('VerificationCode', { mobile: this.state.mobile });
      // const resetAction = StackActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({ routeName: 'VerificationCode' })],
      // });
      // this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
        <Content contentContainerStyle={{flex: 1}} style={styles.content}>
          <Text style={{fontSize: 40}}>{ this.state.mobile }</Text>
            <Button 
              bordered 
              success 
              block
              style={styles.sendCodeBottom}
              onPress={() => this.send()}>
            <Text>{ i18n.t('verify.sendAgainBtn') }</Text>
          </Button>
          <Button 
              ssbordered 
              info 
              block
              style={styles.sendCodeBottom}
              onPress={() => this.changeMobile()}>
            <Text>{ i18n.t('verify.changeMobileNumber') }</Text>
          </Button>
        </Content>
    );
  }
}
