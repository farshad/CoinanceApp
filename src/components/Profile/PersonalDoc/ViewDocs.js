import React, { Component } from "react";
import { Container, Content, Card, CardItem, Body, Text } from "native-base";
import i18n from '../../../i18n';
import { Image } from "react-native";
export default class ViewDocs extends Component {
  constructor(props) {
    super(props);
    this.state = { nationalCard: {}, satisfaction: {} };
  }
  componentDidMount() {
    this.props.navigation.state.params.docs.forEach((doc) => {
      if (doc.fileType.id === 19) {
        this.setState(({
          nationalCard: {
            suffix: doc.suffix,
            image: doc.image
          }
        }))
      } else if (doc.fileType.id === 20) {
        this.setState({
          satisfaction: {
            suffix: doc.suffix,
            image: doc.image
          }
        });
      }
    });
  }
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
                  style={{ width: '100%', height: 200 }}
                  source={{ uri: 'data:image/' + this.state.nationalCard.suffix + ';base64,' + this.state.nationalCard.image }} />
              </Body>
            </CardItem>
            <CardItem footer>

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
                  style={{ width: '100%', height: 200 }}
                  source={{ uri: 'data:image/' + this.state.satisfaction.suffix + ';base64,' + this.state.satisfaction.image }} />
              </Body>
            </CardItem>
            <CardItem style={{ flex: 1, alignContent: "center" }}>

            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
