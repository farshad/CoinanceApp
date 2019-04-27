import React, { Component } from "react";
import styles from '../styles';
import { Image } from "react-native";
import VerificationCodeForm from "./VerificationCodeForm";
import { Container } from "native-base";

export default class VerificationCode extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container style={styles.mainGrid}>
            <Image 
            style={styles.logo}
            source={require('../../../assets/images/logo-green.png')} />
            <VerificationCodeForm></VerificationCodeForm>
      </Container>
    );
  }
}
