import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

export default class Support extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  renderModalContent = () => (
    <View>
      <Text style={styles.contentTitle}>Hi 👋!</Text>
      <Button
        onPress={() => this.toggleModal()}
        title="Close"
      />
    </View>
  );

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal 
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
          onBackButtonPress={this.toggleModal}
          style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <View style={{ 
            backgroundColor:'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)'}}>
            {this.renderModalContent()}
          </View>
        </Modal>
      </View>
    );
  }
}
