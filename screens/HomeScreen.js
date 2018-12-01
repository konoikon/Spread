import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import Event from '../components/Event.js';

export default class HomeScreen extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1,}}>
        <ScrollView style={{flex:1, padding:20, backgroundColor:'skyblue',}}>
          <Event title='Event Title' datetime='Datetime' location='Location'/>
          <Event title='Event Title' datetime='Datetime' location='Location'/>
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
              navigate('CreateEvent')
            }}
            title="Create Event"
          />
        </View>
      </View>

    );
  }
}
