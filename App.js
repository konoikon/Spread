import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import Event from './components/Event.js';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{paddingTop:50, flex:1,}}>
        <ScrollView style={{flex:1, padding:20, backgroundColor:'skyblue',}}>
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </ScrollView>
        <View style={{width:'auto',height:200, backgroundColor:'red', alignItems: 'center'}}>
          <Button
            onPress={() =>{
              Alert.alert('Join Event Button pressed');
            }}
            title="Join Event"
          />
          <Button
            onPress={() =>{
              Alert.alert('Create Event Button pressed');
            }}
            title="Create Event"
          />
        </View>
      </View>

    );
  }
}
