import React, { Component } from "react";
import { Button, Content, Form, Item, Input, Label, Text, Toast, Icon } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import i18n from '../../i18n';
import RegisterService from '../../services/RegisterService';
import UserRepository from '../../storage/repositories/UserRepository';
import UserModel from '../../storage/models/UserModel'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.registerService = new RegisterService();
    this.userRepository = new UserRepository();
    this.state = {
      mobile: '', email: '', fullName: '', password: '',
      isPassword: true,
      passIcon: 'eye-off',
      disable: true
    };
  }
  enableButton = () => {
    if (this.state.email != '',
      this.state.password != '',
      this.state.fullName != '') {
      this.setState({ disable: false });
    }
  }
  changeIcon = () => {
    this.setState(prevState => ({
      passIcon: prevState.passIcon === 'eye' ? 'eye-off' : 'eye',
      isPassword: !prevState.isPassword
    }));
  }
  submit = () => {
    let form = { fullName: this.state.fullName, password: this.state.password, email: this.state.email, mobile: this.props.mobile }
    this.registerService.register(form)
      .then((res) => {
        this.userRepository.create(new UserModel('1', form.mobile, form.password, res));
        this.props.navigation.navigate('Home');
      }).catch((err, status) => {
        if (status == '400' && err.type == 'validation') {
          err.errors.forEach(e => {
            Toast.show({
              text: e.message,
              type: 'danger'
            });
          });
        }
      });
  }
  render() {
    return (
      <Content contentContainerStyle={{ flex: 1 }} style={styles.content}>
        <ScrollView keyboardShouldPersistTaps='always'>
          <Form>
            <Item stackedLabel>
              <Label>{i18n.t('common.fullName')} {i18n.t('common.required')}</Label>
              <Input
                autoFocus={true}
                onChangeText={(text) => { this.setState({ fullName: text }, this.enableButton); }}
                value={this.state.fullName} />
            </Item>
            <Item stackedLabel>
              <Label>{i18n.t('common.email')}</Label>
              <Input
                keyboardType={"email-address"}
                onChangeText={(text) => { this.setState({ email: text }, this.enableButton); }}
                value={this.state.email} />
            </Item>
            <Item stackedLabel>
              <Label>{i18n.t('login.password')} {i18n.t('common.required')}</Label>
              <Input
                onChangeText={(text) => { this.setState({ password: text }, this.enableButton); }}
                secureTextEntry={this.state.isPassword}
                value={this.state.password} />
              <Icon name={this.state.passIcon} onPress={() => this.changeIcon()} />
            </Item>
          </Form>
          <Button
            bordered
            success
            block
            style={styles.sendCodeBottom}
            disabled={this.state.disable}
            onPress={() => this.submit()}>
            <Text>{i18n.t('common.submit')}</Text>
          </Button>
        </ScrollView>
      </Content>
    );
  }
}
