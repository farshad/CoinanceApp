import React, { Component } from "react";
import styles from './styles';
import { Image } from "react-native";
import RegisterForm from "./RegisterForm";
import { Container } from "native-base";

export default class Register extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container style={styles.mainGrid}>
            <Image 
            style={styles.logo}
            source={require('../../assets/images/logo-green.png')} />
            <RegisterForm></RegisterForm>
      </Container>
    );
  }
}
