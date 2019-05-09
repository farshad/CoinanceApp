import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Picker, Icon, Label, Button, Text, Toast } from "native-base";
import i18n from '../../../i18n';
import BankAccountService from '../../../services/BankAccountService';
import BankService from '../../../services/BankService';

export default class BankAccount extends Component {
  constructor(props) {
    super(props);
    this.bankAccountService = new BankAccountService();
    this.bankService = new BankService();
    this.state = { id: '', version: '', shaba: '', cardNo: '', bank: { id: undefined }, bankList: [], disable: true };
  }
  componentWillMount(){
    this.bankAccountService.get().then((res) => {
      this.setState({ id: res.id, version: res.version, shaba: res.shaba, cardNo: res.cardNo, bank: res.bank });
    });
    this.bankService.fetchAll().then((res) => {
      this.setState({ bankList: res });
    });
    if (this.state.cardNo == '' && this.state.shaba == '' && this.state.bank.id == undefined) {
      this.setState({ disable: false });
    }
  }
  enableButton = () => {
    if (this.state.cardNo == '' && this.state.shaba == '' && this.state.bank.id == undefined) {
      this.setState({ disable: true });
    } else {
      this.setState({ disable: false });
    }
  }
  onValueChange = (value) => {
    this.setState({
      bank: { id: value }
    });
  }
  submit = () => {
    let form = { id: this.state.id,
      version: this.state.version,
      shaba: this.state.shaba,
      cardNo: this.state.cardNo,
      bank: this.state.bankList.filter(bl => bl.id == this.state.bank.id).reduce(b => { return b; }) }
    this.bankAccountService.save(form)
      .then((res) => {
        Toast.show({
          text: i18n.t('bankAccount.save'),
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
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ direction: "rtl" }}
                placeholder={i18n.t('bankAccount.selectBank')}
                placeholderStyle={{ color: "#bfc6ea" }}
                selectedValue={this.state.bank != undefined ? this.state.bank.id : undefined }
                onValueChange={this.onValueChange.bind(this)}
              >
                {this.state.bankList.map((item, index) => (
                  <Picker.Item style={{ padding: 0, margin: 0 }} label={item.name} key={item.id} value={item.id} />
                ))}
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>{i18n.t('bankAccount.shaba')} {i18n.t('common.required')}</Label>
              <Input
                keyboardType={"number-pad"} 
                onChangeText={(text) => { this.setState({ shaba: text }, this.enableButton); }}
                value={this.state.shaba} />
            </Item>
            <Item stackedLabel>
              <Label>{i18n.t('bankAccount.cardNo')} {i18n.t('common.required')}</Label>
              <Input
                keyboardType={"number-pad"} 
                onChangeText={(text) => { this.setState({ cardNo: text }, this.enableButton); }}
                value={this.state.cardNo} />
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
