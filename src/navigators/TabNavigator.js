import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import i18n from '../i18n';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { ProfileNavigator, HomeNavigator, SupportNavigator } from './StackNavigator';
import styles from './styles';

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
        <FooterTab style={styles.footerTab}>
          <Button
            style={props.navigation.state.index === 0 ? styles.activeBtn : null}
            vertical
            active={props.navigation.state.index === 0}
            onPress={() => props.navigation.navigate("Home")}>
            <Icon style={props.navigation.state.index === 0 ? styles.activeIconAndTxt : styles.inactiveIcon} name="home" />
            {props.navigation.state.index === 0 && (<Text style={props.navigation.state.index === 0 ? styles.activeIconAndTxt : null}>{ i18n.t('mainTab.home') }</Text>)}
          </Button>
          <Button
            style={props.navigation.state.index === 1 ? styles.activeBtn : null}
            vertical
            active={props.navigation.state.index === 1}
            onPress={() => props.navigation.navigate("Profile")}>
            <Icon style={props.navigation.state.index === 1 ? styles.activeIconAndTxt : styles.inactiveIcon} name="person" />
            {props.navigation.state.index === 1 && (<Text style={props.navigation.state.index === 1 ? styles.activeIconAndTxt : null}>{ i18n.t('mainTab.profile') }</Text>)}
          </Button>
          <Button
            style={props.navigation.state.index === 2 ? styles.activeBtn : null}
            vertical
            active={props.navigation.state.index === 2}
            onPress={() => props.navigation.navigate("Support")}>
            <Icon style={props.navigation.state.index === 2 ? styles.activeIconAndTxt : styles.inactiveIcon} name="chatboxes" />
            {props.navigation.state.index === 2 && (<Text style={props.navigation.state.index === 2 ? styles.activeIconAndTxt : null}>{ i18n.t('mainTab.support') }</Text>)}
          </Button>
        </FooterTab>
      </Footer>
      );
    }
  }
);

