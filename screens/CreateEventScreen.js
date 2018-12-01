import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert,
         TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as firebase from 'firebase';
import 'firebase/firestore';

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: 'black',
  },
});

const config = {
    apiKey: "AIzaSyBsr9S-GTboxVbz_Xi5VFvXDHjRahwozWc",
    authDomain: "spread-7fdc3.firebaseapp.com",
    databaseURL: "https://spread-7fdc3.firebaseio.com",
    projectId: "spread-7fdc3",
    storageBucket: "spread-7fdc3.appspot.com",
    messagingSenderId: "1091492798848"
  };
firebase.initializeApp(config);

export default class CreateEventScreen extends Component {

  constructor(props){
    super(props)
    this.state = {eventTitle: "title",
                  eventDescription: "description",
                  eventLocation: "loc",
                  eventDatetime: new Date(),
                  eventInvite1Name: "invite1Name",
                  eventInvite1Phone: "invite1Phone",
                  eventInvite2Name: "invite2Name",
                  eventInvite2Phone: "invite2Name",}

    this.createEvent = this.createEvent.bind(this);
  }


  createEvent() {
    if (!this.state.eventTitle) return;

    firebase.firestore().settings( { timestampsInSnapshots: true });

    const event = firebase.firestore().collection('events')
                  .add({title: this.state.eventTitle,
                        description: this.state.eventDescription,
                        location: this.state.eventLocation,
                        datetime: this.state.eventDatetime,
                        eventInvite1Name: this.state.eventInvite1Name,
                        eventInvite2Name: this.state.eventInvite2Name,
                        eventInvite1Phone: this.state.eventInvite1Phone,
                        eventInvite2Phone: this.state.eventInvite1Phone});

    this.props.navigation.navigate('Home');
  }

  render() {
    return(
      <View style={{backgroundColor: 'grey', flex:1}}>
        <View style={{backgroundColor: 'blue', flex:1, paddingLeft: 10}}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Event Title"
            onChangeText={(eventTitle) => this.setState({eventTitle})}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Event Description"
            onChangeText={(eventDescription) => this.setState({eventDescription})}
          />
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Event Location"
            onChangeText={(eventLocation) => this.setState({eventLocation})}
          />
        </View>
        <View style={{backgroundColor: 'red', flex: 1, paddingLeft: 10}}>
          <Text style={styles.label}>Date</Text>
          <DatePicker
            date={this.state.eventDatetime}
            placeholder='Event Datetime'
            mode="datetime"
            format="YYYY-MM-DD HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(datetime) => {this.setState({eventDatetime: datetime});}}
          />
        </View>
        <View style={{backgroundColor: 'yellow', flex: 1, paddingLeft: 10}}>
          <Text style={styles.label}>Invite 1</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Name"
            onChangeText={(eventInvite1Name) => this.setState({eventInvite1Name})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Phone #"
            onChangeText={(eventInvite1Phone) => this.setState({eventInvite1Phone})}
          />
          <Text style={styles.label}>Invite 2</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Name"
            onChangeText={(eventInvite2Name) => this.setState({eventInvite2Name})}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Phone #"
            onChangeText={(eventInvite2Phone) => this.setState({eventInvite2Phone})}
          />
        </View>
        <View style={{backgroundColor: 'white', flex:0.4}}>
          <Button
            title="Create Event"
            onPress={this.createEvent}
          />
        </View>
      </View>
    );
  }
}
