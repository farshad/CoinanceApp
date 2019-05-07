import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Label, Button, Text } from "native-base";
import i18n from '../../../i18n';
import UserService from '../../../services/UserService';

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = { email: '', fullName: '', image: '', disable: false };
    this.userService.getCurrent().then((res) => {
      this.setState({fullName: res.fullName, email: res.email});
    });
  }
  enableButton = () => {
    if (this.state.fullName == '') {
      this.setState({ disable: true });
    }else{
      this.setState({ disable: false });
    }
  }
  submit = () => {
    let form = { fullName: this.state.fullName, email: this.state.email}
    this.userService.update(form)
      .then((res) => {
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
  };
  render() {
    return (
      <Container>
        <Content>
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
          </Form>
        </Content>
        <Button
          success
          block
          // style={styles.sendCodeBottom}
          disabled={this.state.disable}
          onPress={ () => this.submit() }>
          <Text>{i18n.t('common.submit')}</Text>
        </Button>
      </Container>
    );
  }
}
