// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/Home';
import Player from '../screens/Player';
import AuthTabNavigator from '../routes/AuthTabNavigator';

import Colors from '../Constant/Colors'


const AppNavigator = createStackNavigator({
 
  AuthTabNavigator: {
    screen: AuthTabNavigator,
    navigationOptions: {
      header: null
    }
  },
   
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
     
  Player: {
    screen: Player,
    navigationOptions: {
      header: null
    }
  },
}
 
);




export default createAppContainer(AppNavigator);