import React, { Component } from "react";
import { Container, Content, List, Separator, Icon, ListItem, Text, Left } from 'native-base';
import i18n from '../../i18n'

export default class Profile extends Component {
  render() {
    return (
      <Container >
        <Content>
          <List>
            <Separator>
              <Text>{ i18n.t('profile.title') }</Text>
            </Separator>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('Update') } >
              <Left>
                <Icon name="arrow-back" />
              </Left>
                <Text>{ i18n.t('profile.update') }</Text>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('PersonalDoc') } >
              <Left>
                <Icon name="arrow-back" />
              </Left>
                <Text>{ i18n.t('profile.docs') }</Text>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Icon name="arrow-back" />
              </Left>
                <Text>{ i18n.t('profile.changePass') }</Text>
            </ListItem>
            <Separator>
              <Text>{ i18n.t('finance.title') }</Text>
            </Separator>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Icon name="arrow-back" />
              </Left>
                <Text>{ i18n.t('finance.deposit') }</Text>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Icon name="arrow-back" />
              </Left>
                <Text>{ i18n.t('finance.transactionsHistory') }</Text>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Icon name="arrow-back" />
              </Left>
                <Text>{ i18n.t('finance.addBankAccount') }</Text>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Icon name="arrow-back" />
              </Left>
                <Text>{ i18n.t('finance.settlementRequest') }</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
