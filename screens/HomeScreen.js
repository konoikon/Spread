import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert,
         FlatList} from 'react-native';
import Event from '../components/Event.js';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)
    firebase.firestore().settings( { timestampsInSnapshots: true });
    this.ref = firebase.firestore().collection('events');
    this.unsubscribe = null;

    this.state = {loading: true,
                  events: [],}
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const events = [];

    querySnapshot.forEach((doc) => {
      const {title, datetime, location, description,
              eventInvite1Phone, eventInvite2Name, eventInvite1Name,
              eventInvite2Phone,} = doc.data();

      events.push({
        title,
        datetime,
        location,
      });
    });

    this.setState({
      events,
      loading: false,
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1,}}>
        <ScrollView style={{flex:1, padding:20, backgroundColor:'skyblue',}}>
          <FlatList
            data={this.state.events}
            renderItem={({item}) => <Event {...item}/>}
          />
        </ScrollView>
        <View style={{width:'auto',height:200, backgroundColor:'red', alignItems: 'center'}}>
          <Button
            onPress={() =>{
              navigate('JoinEvent')
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
