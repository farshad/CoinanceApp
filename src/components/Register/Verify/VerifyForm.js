import React, { Component } from "react";
import { Content, Form, Item, Input, Label, Text, Toast } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles";
import i18n from '../../../i18n';
import RegisterService from '../../../services/RegisterService';

export default class VerifyForm extends Component {
  constructor(props){
    super(props);
    this.registerService = new RegisterService();
    this.state = { verificationCode: '', timer: 120};
  }
  startTimer = () => {
    setInterval(() => {
    this.decrementClock();
    }, 1000);
  };
  decrementClock = () => {  
    if(this.state.timer > 0){
      this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
    }else{
      this.props.navigation.replace('SendAgain', { mobile: this.props.mobile });
    }
  };
  componentWillMount() {
    this.startTimer();
  }
  setVerificationCode = () => {
    if(this.state.verificationCode.length > 5){
      this.send();
    }    
  }
  send = () => {
    this.registerService.verify(this.props.mobile, this.state.verificationCode)
    .then((res) => {
      this.props.navigation.navigate('Register', {mobile: this.props.mobile});
    }).catch((err) => {
      if(err.status == '400'){
        Toast.show({
          text: err.message,
          type: 'danger'
        });
      }
    });
  }
  render() {
    return (
        <Content contentContainerStyle={{flex: 1}} style={styles.content}>
          <ScrollView keyboardShouldPersistTaps='always'>
          <Text>{ i18n.t('verify.enterForm') }</Text>
            <Form>
              <Item stackedLabel>
                <Label>{ i18n.t('verify.inputLable') }</Label>
                <Input
                maxLength={6}
                autoFocus = {true} 
                keyboardType={"number-pad"} 
                onChangeText={ (text) => { this.setState({verificationCode: text}, this.setVerificationCode);} } 
                value={this.state.verificationCode} />
              </Item>
            </Form>
          <Text style={{fontSize: 30}}>
            { this.state.timer }
          </Text>
          </ScrollView>
        </Content>
    );
  }
}
