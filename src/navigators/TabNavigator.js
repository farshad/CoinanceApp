import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import i18n from '../i18n';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { ProfileNavigator, HomeNavigator, SupportNavigator } from './StackNavigator';

export default TabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
        };
      }
    },
    Support: SupportNavigator,
  },
  {
    tabBarPosition: "bottom",
    initialRouteName: 'Home',
    backBehavior: "none",
    tabBarComponent: props => {
      return (
        <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigation.state.index === 2}
            onPress={() => props.navigation.navigate("Support")}>
            <Icon name="chatboxes" />
            {props.navigation.state.index === 2 && (<Text>{ i18n.t('mainTab.support') }</Text>)}
          </Button>
          <Button
            vertical
            active={props.navigation.state.index === 1}
            onPress={() => props.navigation.navigate("Profile")}>
            <Icon name="person" />
            {props.navigation.state.index === 1 && (<Text>{ i18n.t('mainTab.profile') }</Text>)}
          </Button>
          <Button
            vertical
            active={props.navigation.state.index === 0}
            onPress={() => props.navigation.navigate("Home")}>
            <Icon name="home" />
            {props.navigation.state.index === 0 && (<Text>{ i18n.t('mainTab.home') }</Text>)}
          </Button>
        </FooterTab>
      </Footer>
      );
    }
  }
);

