import { createStackNavigator } from "react-navigation";
import Profile from "../components/Profile";
import Update from "../components/Profile/Update";
import ChangePassword from '../components/Profile/ChangePassword';
import PersonalDoc from '../components/Profile/PersonalDoc';
import Home from '../components/Home';
import Support from '../components/Support';

export const ProfileNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            header: null,
        })
    },
    Update: {
        screen: Update,
        navigationOptions: () => ({
          tabBarVisible: null,
        })
      },
      PersonalDoc: {
        screen: PersonalDoc,
        navigationOptions: () => ({
            tabBarVisible: null,
        })
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: () => ({
            tabBarVisible: null,
        })
    }
 });

 export const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
        })
    },
 });

 export const SupportNavigator = createStackNavigator({
    Support: {
        screen: Support,
        navigationOptions: () => ({
            header: null,
        })
    },
 });