import React from 'react';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import DetailScreen from './screens/Detail'
import { Provider } from 'react-redux'
import store from './store'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
}, {
    initialRouteName: 'Home'
  })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
