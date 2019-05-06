import React, { Component } from "react";
import { Container, Text, View, Button } from "native-base";
import ModalCustom from './ModalCustom';
import Form from './Form';

export default class Support extends Component {
  myComponent = <Form />
  render() {
    return (
        <Container>
            <ModalCustom modalContent={this.myComponent}></ModalCustom>  
        </Container>
    );
  }
}
