import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert,
         TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Communications from 'react-native-communications';

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  textbox: {
    height:40,
    borderColor: 'white',
    borderBottomWidth: 2,
    fontSize: 18
  }
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
                  eventCodes: []}

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
                        eventInvite1Phone: this.state.eventInvite1Phone,
                        eventCodes: ["2134", "5412"]});

    Communications.text(this.state.eventInvite1Phone, "Hello " + this.state.eventInvite1Name + " your code to join the event is 2134");
    //Communications.text(this.state.eventInvite2Phone, "Hello " + this.state.eventInvite2Name + " your code to join the event is 5412");
    this.props.navigation.navigate('Home');
  }

  render() {
    return(
      <View style={{backgroundColor: 'grey', flex:1}}>
        <View style={{backgroundColor: '#00b0ff', flex:1, paddingLeft: 10, paddingRight: 10, justifyContent:'center'}}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Event Title"
            onChangeText={(eventTitle) => this.setState({eventTitle})}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Event Description"
            onChangeText={(eventDescription) => this.setState({eventDescription})}
          />
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Event Location"
            onChangeText={(eventLocation) => this.setState({eventLocation})}
          />
        </View>
        <View style={{backgroundColor: '#00b0ff', flex: 0.6, paddingLeft: 10, paddingRight: 10, justifyContent:'center', alignItems:'center', borderColor:'white',borderBottomWidth:3}}>
          <Text style={styles.label}>Date & TIme</Text>
          <DatePicker
            date={this.state.eventDatetime}
            placeholder='Event Datetime'
            mode="datetime"
            format="YYYY-MM-DD HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={true}
            onDateChange={(datetime) => {this.setState({eventDatetime: datetime});}}
          />
        </View>
        <View style={{backgroundColor: '#00b0ff', flex: 1, paddingLeft: 10, paddingRight: 10, justifyContent:'center'}}>
          <Text style={styles.label}>Invitee Information</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Name"
            onChangeText={(eventInvite1Name) => this.setState({eventInvite1Name})}
          />
          <TextInput
            style={styles.textbox}
            placeholder="Phone #"
            onChangeText={(eventInvite1Phone) => this.setState({eventInvite1Phone})}
          />
        </View>
        <View style={{backgroundColor: '#0081cb', flex:0.4}}>
          <Button
            title="Create Event"
            onPress={this.createEvent}
            color="white"
          />
        </View>
      </View>
    );
  }
}
