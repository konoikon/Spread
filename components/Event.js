import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  eventTitle: {
  color: 'black',
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  },
});

export default class Event extends Component {

  render() {
    return (
      <View style={{width: 'auto', height: 180, backgroundColor: 'white', paddingTop:20}}>
        <Text style={styles.eventTitle}>Event title</Text>
        <Text style={{textAlign: 'center'}}>Datetime</Text>
        <Text style={{textAlign: 'center'}}>Location</Text>
        <Button
          onPress={() =>{
            Alert.alert('Invite will be sent...');
          }}
          title="Invite"
        />
      </View>
    );
  }
}
