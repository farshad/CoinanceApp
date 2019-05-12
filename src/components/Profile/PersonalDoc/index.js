import React, { Component } from "react";
import DocumentService from '../../../services/DocumentService';
import {Text} from 'native-base';

export default class PersonalDoc extends Component {
  constructor(props) {
    super(props);
    this.documentService = new DocumentService();
    this.state = { docs: null };
  }
  componentWillMount() {
    this.documentService.get().then((res) => {
      if(res == null || res === 0){
        this.props.navigation.replace('UploadDocForm');
      }else{
        this.props.navigation.replace('ViewDocs', { docs: res });
      }
    });
  }
  render() {
    return (
      <Text></Text>
    );
  }
}
