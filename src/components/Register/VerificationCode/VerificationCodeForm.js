import React, { Component } from "react";
import { Button, Content, Form, Item, Input, Label, Text, Toast } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles";
import i18n from '../../../i18n';
import RegisterService from '../../../services/RegisterService';

export default class VerificationCodeForm extends Component {
  constructor(props){
    super(props);
    this.registerService = new RegisterService();
    this.state = { mobile: '', disable: true};
  }
  enableButton = () => {
    if(this.state.mobile.length > 10){
      this.setState({disable:false});
    }else{
      this.setState({disable:true});
    }
  }
  sendCode = () => {
    this.registerService.getVerficationCode(this.state.mobile)
    .then((res) => {
      this.props.navigation.replace('Verify', { mobile: this.state.mobile });
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
            <Form>
              <Item stackedLabel>
                <Label>{ i18n.t('common.mobileNumber') }</Label>
                <Input
                maxLength={11}
                autoFocus = {true} 
                keyboardType={"number-pad"} 
                onChangeText={ (text) => { this.setState({mobile: text}, this.enableButton);} } 
                value={this.state.mobile} />
              </Item>
            </Form>
          </ScrollView>
          <Button 
          bordered 
          success 
          block
          style={styles.sendCodeBottom}
          disabled={this.state.disable}
          onPress={() => this.sendCode()}>
            <Text>{ i18n.t('login.getVerficationCode') }</Text>
          </Button>
        </Content>
    );
  }
}
