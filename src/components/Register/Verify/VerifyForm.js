import React, { Component } from "react";
import { Button, Content, Form, Item, Input, Label, Text, Toast } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles";
import i18n from '../../../i18n';
import RegisterService from '../../../services/RegisterService';

export default class VerifyForm extends Component {
  constructor(props){
    super(props);
    this.registerService = new RegisterService();
    this.state = { timer: 5};
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
  send = () => {
    this.registerService.getVerficationCode(this.props.mobile)
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
                onChangeText={ (text) => { this.setState({mobile: text}, this.enableButton);} } 
                value={this.state.mobile} />
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
