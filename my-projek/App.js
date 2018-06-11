import React from 'react';
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './screens/Home.js'
import AboutScreen from './screens/About.js'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
},
  {
    initialRouteName: 'Home'
  })

export default RootStack
