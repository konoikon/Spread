import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert,
         TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: 'black',
  },
});

export default class CreateEventScreen extends Component {

  constructor(props){
    super(props)
    this.state = {eventTitle: "title",
                  eventDescription: "description",
                  eventDatetime: new Date(),
                  eventInvite1Name: "invite1Name",
                  eventInvite1Phone: "invite1Phone",
                  eventInvite2Name: "invite2Name",
                  eventInvite2Phone: "invite2Name",}
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
            onPress={() => {
              Alert.alert("Create Event Button Pressed");
            }}
          />
        </View>
      </View>
    );
  }
}
