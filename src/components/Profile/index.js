import React, { Component } from "react";
import {
  Container, Content,
  List, Separator,
  Icon, ListItem,
  Text, Left, Right,
  Thumbnail, Body
} from 'native-base';
import i18n from '../../i18n'
import UserService from '../../services/UserService'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = { fullName: '', mobile: '' };
    this.userService.getCurrent().then((res) => {
      this.setState({ fullName: res.fullName, mobile: res.mobile });
    });
  }
  render() {
    return (
      <Container >
        <Content>
          <List>
            <Separator>
              <Text>{i18n.t('profile.title')}</Text>
            </Separator>
            <ListItem onPress={() => this.props.navigation.navigate('Update')}>
              <Left style={{ justifyContent: 'center' }}>
                <Thumbnail source={require('../../assets/images/avatar_default.png')} />
                <Body style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10, marginTop: 10 }} >
                  <Text>{this.state.fullName}</Text>
                  <Text note>{this.state.mobile}</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={() => this.props.navigation.navigate('PersonalDoc')} >
              <Left>
                <Text>{i18n.t('profile.docs')}</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={() => this.props.navigation.navigate('ChangePassword')} >
              <Left>
                <Text>{i18n.t('profile.changePass')}</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <Separator>
              <Text>{i18n.t('finance.title')}</Text>
            </Separator>
            <ListItem button={true} onPress={() => this.props.navigation.navigate('ChangePassword')} >
              <Left>
                <Text>{i18n.t('finance.deposit')}</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={() => this.props.navigation.navigate('ChangePassword')} >
              <Left>
                <Text>{i18n.t('finance.transactionsHistory')}</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={() => this.props.navigation.navigate('BankAccount')} >
              <Left>
                <Text>{i18n.t('finance.addBankAccount')}</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={() => this.props.navigation.navigate('SettlementRequest')} >
              <Left>
                <Text>{i18n.t('finance.settlementRequest')}</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
