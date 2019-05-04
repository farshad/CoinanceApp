import { createStackNavigator } from "react-navigation";
import Profile from "../components/Profile";
import Update from "../components/Profile/Update";
import Home from '../components/Home';

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
 }, {
 });

 export const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: null,
        })
    },
 }, {
 });