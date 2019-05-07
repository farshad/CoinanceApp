import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast } from "native-base";
import i18n from '../../../i18n';
import UserService from '../../../services/UserService';
import UserRepository from '../../../storage/repositories/UserRepository';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.userRepository = new UserRepository();
    this.state = { oldPassword: '', newPassword: '', disable: true };
  }
  enableButton = () => {
    if (this.state.oldPassword != '' && this.state.newPassword != '') {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }
  submit = () => {
    let form = { oldPassword: this.state.oldPassword, newPassword: this.state.newPassword }
    this.userService.changePassword(form)
      .then((res) => {
        this.userRepository.update({id: '1', pass: form.newPassword});
        Toast.show({
          text: i18n.t('profile.changePassSuccess'),
          type: 'success'
        });
      }).catch((err, status) => {
        if (status == '400') {
          Toast.show({
            text: err.description,
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
                autoFocus={true}
                onChangeText={(text) => { this.setState({ oldPassword: text }, this.enableButton); }}
                value={this.state.oldPassword} />
            </Item>
            <Item stackedLabel>
              <Label>{i18n.t('profile.newPassword')}</Label>
              <Input
                onChangeText={(text) => { this.setState({ newPassword: text }, this.enableButton); }}
                value={this.state.newPassword} />
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
