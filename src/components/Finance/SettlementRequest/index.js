import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast } from "native-base";
import i18n from '../../../i18n';
import SettlementRequestService from '../../../services/SettlementRequestService';

export default class SettlementRequest extends Component {
  constructor(props) {
    super(props);
    this.settlementRequestService = new SettlementRequestService();
    this.state = { amount: '', disable: true };
  }
  enableButton = () => {
    if (this.state.amount == '') {
      this.setState({ disable: true });
    } else {
      this.setState({ disable: false });
    }
  }
  submit = () => {
    let form = { amount: this.state.amount }
    this.settlementRequestService.save(form)
      .then((res) => {
        Toast.show({
          text: i18n.t('settlementRequest.save'),
          position: 'top',
          type: 'success'
        });
      }).catch((err, status) => {
        if (status == '400' && err.type == 'validation') {
          err.errors.forEach(e => {
            Toast.show({
              text: e.message,
              type: 'danger',
              position: 'top'
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
              <Label>{i18n.t('settlementRequest.amount')}</Label>
              <Input
                autoFocus={true}
                keyboardType={"number-pad"} 
                onChangeText={(text) => { this.setState({ amount: text }, this.enableButton); }}
                value={this.state.amount} />
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
