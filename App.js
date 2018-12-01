import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CreateEventScreen from './screens/CreateEventScreen';
import JoinEventScreen from './screens/JoinEventScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Navigator = createStackNavigator({
  Home: {screen: HomeScreen},
  CreateEvent: {screen: CreateEventScreen},
  JoinEvent: {screen: JoinEventScreen},
},
{
  initialRouteName: "Home",
});

const App = createAppContainer(Navigator);

export default App;
