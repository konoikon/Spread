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

  static navigationOptions = {
    title: 'Spread',
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const events = [];

    querySnapshot.forEach((doc) => {
      const {title, datetime, location} = doc.data();
      console.log(doc.data());

      events.push({
        key: doc.id,
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
        <View style={{height:200, backgroundColor:'#0081cb', alignItems: 'center', paddingTop:40}}>
        <Button
              onPress={() =>{
                navigate('JoinEvent')
              }}
              title="Join Event"
              color="white"
            />
          <Button
            onPress={() =>{
              navigate('CreateEvent')
            }}
            title="Create Event"
            color="white"
          />
        </View>
      </View>

    );
  }
}
