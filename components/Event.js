import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  eventTitle: {
  color: 'black',
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  margin:5,
  },
});

export default class Event extends Component {

  render() {
    return (
      <View style={{width: 'auto', height: 180, backgroundColor: 'white', paddingTop: 20, margin:10,
                    borderColor: '#0081cb', borderWidth: 5, justifyContent:'center'}}>
        <Text style={styles.eventTitle}>{this.props.title}</Text>
        <Text style={{textAlign: 'center', margin:5}}>{this.props.datetime}</Text>
        <Text style={{textAlign: 'center', margin:5}}>{this.props.location}</Text>
        <Button
          onPress={() =>{
            Alert.alert('Invite button pressed');
          }}
          title="Invite people"
        />
      </View>
    );
  }
}
