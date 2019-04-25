import React, { Component } from "react";
import styles from './styles';
import { Image } from "react-native";
import RegisterForm from "./RegisterForm";
import { Container } from "native-base";
import { Row, Grid } from "react-native-easy-grid";

export default class Register extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <Container>
        <Grid style={styles.mainGrid}>
          <Row style={{marginTop: 10 }} size={25}>
            <Image 
            style={styles.logo}
            source={require('../../assets/images/logo-green.png')} />
          </Row>
          <Row size={75}>
            <RegisterForm></RegisterForm>
          </Row>
        </Grid>
      </Container>
    );
  }
}
