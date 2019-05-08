import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Icon, Label, Button, Text, Toast } from "native-base";
import i18n from '../../../i18n';
import UserService from '../../../services/UserService';
import UserRepository from '../../../storage/repositories/UserRepository';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.userRepository = new UserRepository();
    this.state = { oldPassword: '', newPassword: '',
    isPasswordNew: true,
    passIconNew: 'eye-off',
    isPasswordOld: true,
    passIconOld: 'eye-off',
    disable: true };
  }
  enableButton = () => {
    if (this.state.oldPassword != '' && this.state.newPassword != '') {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }
  changeIconOld = () => {
    this.setState(prevState => ({
      passIconOld: prevState.passIconOld === 'eye' ? 'eye-off' : 'eye',
      isPasswordOld: !prevState.isPasswordOld
    }));
  }
  changeIconNew = () => {
    this.setState(prevState => ({
      passIconNew: prevState.passIconNew === 'eye' ? 'eye-off' : 'eye',
      isPasswordNew: !prevState.isPasswordNew
    }));
  }
  submit = () => {
    let form = { oldPassword: this.state.oldPassword, newPassword: this.state.newPassword }
    this.userService.changePassword(form)
      .then((res) => {
        this.userRepository.update({id: '1', pass: form.newPassword});
        Toast.show({
          text: i18n.t('profile.changePassSuccess'),
          position: 'top',
          type: 'success'
        });
      }).catch((err, status) => {
        if (status == '400') {
          Toast.show({
            text: err.description,
            position: 'top',
            type: 'danger'
          });
        }
      });
  };
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>{i18n.t('profile.oldPassword')} {i18n.t('common.required')}</Label>
              <Input
                onChangeText={(text) => { this.setState({ oldPassword: text }, this.enableButton); }}
                secureTextEntry={this.state.isPasswordNew}
                value={this.state.oldPassword} />
              <Icon name={this.state.passIconNew} onPress={() => this.changeIconNew()} />
            </Item>
            <Item stackedLabel>
              <Label>{i18n.t('profile.newPassword')} {i18n.t('common.required')}</Label>
              <Input
                onChangeText={(text) => { this.setState({ newPassword: text }, this.enableButton); }}
                secureTextEntry={this.state.isPasswordOld}
                value={this.state.newPassword} />
              <Icon name={this.state.passIconOld} onPress={() => this.changeIconOld()} />
            </Item>
          </Form>
        </Content>
        <Button
          success
          block
          // style={styles.sendCodeBottom}
          disabled={this.state.disable}
          onPress={() => this.submit()}>
          <Text>{i18n.t('common.submit')}</Text>
        </Button>
      </Container>
    );
  }
}
