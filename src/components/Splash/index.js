import React, { Component } from "react";
import { Animated, View, Text } from "react-native";
import { Spinner } from 'native-base';
import UserRepository from '../../storage/repositories/UserRepository';
import i18n from '../../i18n';

export default class Splash extends Component {
  constructor(props) {
    super(props)
    this._userRepository = new UserRepository();
}
  state = {
    logoOpacity : new Animated.Value(0),
    marginTop : new Animated.Value(-200),
    spinnerOpacity: 0,
    token: 0,
  }

  async componentDidMount(){
    Animated.sequence([
      Animated.timing(this.state.marginTop, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 1500,
      })
    ]).start(() => {
      this.setState({spinnerOpacity: 1});
      if(this._userRepository.getToken() != null){
        this.props.navigation.navigate('Home');
      }else {
        this.props.navigation.navigate('Register');
      }
    })
  }
  
  render() {
    return (
        <View style={{ backgroundColor: '#00bd56', flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Animated.Image style={{ height: 150, width: 150, marginTop: this.state.marginTop, opacity: this.state.logoOpacity }} source={require('../../assets/images/logo-flat.png')} />
          <Text style={{fontSize: 40, color: 'white'}}>{ i18n.t('splash.appName') }</Text>
          <Text style={{fontSize: 20, color: 'white'}}>{ i18n.t('splash.slogan') }</Text>
          <Spinner color='white' style={{opacity: this.state.spinnerOpacity}} />
        </View>
    );
  }
}
