import React, { Component } from "react";
import { Container, Content, Card, CardItem, Body, Button, Text, Toast } from "native-base";
import i18n from '../../../i18n';
import DocumentService from '../../../services/DocumentService';
import ImagePicker from 'react-native-image-picker';
import { Image, Platform } from "react-native";

const options = {
  storageOptions: {
    skipBackup: true
  },
};

export default class UploadDocForm extends Component {
  constructor(props) {
    super(props);
    this.documentService = new DocumentService();
    this.state = { nationalCard: '', nationalCardSource: '', satisfaction: '', satisfactionSource: '', disable: true };
  }
  chooseCardId = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        alert('Error: ', response.error);
      } else {
        this.setState({
          nationalCard: response,
          nationalCardSource: response.data
        });
        this.enableButton();
      }
    });
  }
  chooseSatisfaction = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        alert('Error: ', response.error);
      } else {
        this.setState({
          satisfaction: response,
          satisfactionSource: response.data
        });
        this.enableButton();
      }
    });
  }
  enableButton = () => {
    if (this.state.nationalCard != '' && this.state.satisfaction != '') {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }
  submit = () => {
    let form = new FormData();
    form.append('documentAddDtos[0].fileTypeId', 19);

    form.append("documentAddDtos[0].image", {
      name: this.state.nationalCard.fileName,
      type: this.state.nationalCard.type,
      uri:
        Platform.OS === "android" ? this.state.nationalCard.uri : this.state.nationalCard.uri.replace("file://", "")
    });

    form.append('documentAddDtos[1].fileTypeId', 20);

    form.append("documentAddDtos[1].image", {
      name: this.state.satisfaction.fileName,
      type: this.state.satisfaction.type,
      uri:
        Platform.OS === "android" ? this.state.satisfaction.uri : this.state.satisfaction.uri.replace("file://", "")
    });

    this.documentService.upload(form)
      .then((res) => {
        Toast.show({
          text: i18n.t('settlementRequest.save'),
          position: 'top',
          type: 'success'
        });
      }).catch((err, status) => {
        if (status == '400' && err.type == 'validation') {
          err.errors.forEach(e => {
            Toast.show({
              text: e.message,
              type: 'danger',
              position: 'top'
            });
          });
        }
      });
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header >
              <Text>{i18n.t('personalDoc.cardIdImage')}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  resizeMode={'cover'}
                  style={{ width: '100%', height: this.state.nationalCardSource != '' ? 200 : null }}
                  source={{ uri: 'data:image/jpeg;base64,' + this.state.nationalCardSource }} />
              </Body>
            </CardItem>
            <CardItem footer>
              <Button block success rounded bordered
                onPress={() => this.chooseCardId()} >
                <Text>بارگداری</Text>
              </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem header >
              <Text>{i18n.t('personalDoc.satisfactionImage')}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  resizeMode={'cover'}
                  style={{ width: '100%', height: this.state.satisfactionSource != '' ? 200 : null }}
                  source={{ uri: 'data:image/jpeg;base64,' + this.state.satisfactionSource }} />
              </Body>
            </CardItem>
            <CardItem style={{ flex: 1, alignContent: "center" }}>
              <Button rounded block bordered success
                onPress={() => this.chooseSatisfaction()} >
                <Text>بارگداری</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
        <Button
          success
          block
          // style={styles.sendCodeBottom}
          disabled={this.state.disable}
          onPress={() => this.submit()}>
          <Text>{i18n.t('common.send')}</Text>
        </Button>
      </Container>
    );
  }
}
