import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, TextInput, Alert } from 'react-native';
import Event from '../components/Event.js';

export default class JoinEventScreen extends Component {

  constructor(props){
    super(props)
    this.state = {joinCode: "null"}
  }

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={{backgroundColor: "#69e2ff", flex:1, alignItems:'center',
                    justifyContent: 'center'}}>
        <TextInput
          style={{height:40, borderColor: 'white', borderBottomWidth: 2,
                  fontSize: 18}}
          placeholder="Enter Join Code"
          onChangeText={(joinCode) => this.setState(joinCode)}
        />
        <Button
          onPress={() => {
            Alert.alert("Join code button pressed")
            navigate('Home');
          }}
          title="Join Event"
        />
      </View>
    );
  }
}
