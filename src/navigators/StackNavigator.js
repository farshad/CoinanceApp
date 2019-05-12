import { createStackNavigator } from "react-navigation";
import Profile from "../components/Profile";
import Update from "../components/Profile/Update";
import ChangePassword from '../components/Profile/ChangePassword';
import PersonalDoc from '../components/Profile/PersonalDoc';
import Home from '../components/Home';
import Deal from '../components/Deal';
import Support from '../components/Support';
import BankAccount from '../components/Finance/BankAccount';
import SettlementRequest from '../components/Finance/SettlementRequest';
import UploadDocForm from '../components/Profile/PersonalDoc/UploadDocForm';
import ViewDocs from '../components/Profile/PersonalDoc/ViewDocs';

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
    UploadDocForm: {
        screen: UploadDocForm,
        navigationOptions: () => ({
            tabBarVisible: null,
        })
    },
    ViewDocs: {
        screen: ViewDocs,
        navigationOptions: () => ({
            tabBarVisible: null,
        })
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: () => ({
            tabBarVisible: null,
        })
    },
    BankAccount: {
        screen: BankAccount,
        navigationOptions: () => ({
            tabBarVisible: null,
        })
    },
    SettlementRequest: {
        screen: SettlementRequest,
        navigationOptions: () => ({
            tabBarVisible: null,
        })
    }
 });

 export const DealNavigator = createStackNavigator({
    Deal: {
        screen: Deal,
        navigationOptions: () => ({
            header: null,
        })
    },
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