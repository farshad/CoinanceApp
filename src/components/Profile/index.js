import React, { Component } from "react";
import { 
  Container, Content,
  List, Separator,
  Icon, ListItem,
  Text, Left, Right,
  Thumbnail, Body 
} from 'native-base';
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
            <ListItem onPress={ () => this.props.navigation.navigate('Update') }>
              <Left style={{justifyContent: 'center' }}>
                <Thumbnail source={require('../../assets/images/avatar_default.png')} />
                <Body style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10, marginTop: 10 }} >
                  <Text>فرشاد آهنگری</Text>
                  <Text note>۰۹۱۰۲۶۲۶۰۷۶</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('PersonalDoc') } >
              <Left>
                <Text>{ i18n.t('profile.docs') }</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Text>{ i18n.t('profile.changePass') }</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <Separator>
              <Text>{ i18n.t('finance.title') }</Text>
            </Separator>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Text>{ i18n.t('finance.deposit') }</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Text>{ i18n.t('finance.transactionsHistory') }</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Text>{ i18n.t('finance.addBankAccount') }</Text>
              </Left>
              <Right>
                <Icon name="arrow-back" />
              </Right>
            </ListItem>
            <ListItem button={true} onPress={ () => this.props.navigation.navigate('ChangePassword') } >
              <Left>
                <Text>{ i18n.t('finance.settlementRequest') }</Text>
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
