import React from 'react'
import {View, Text} from 'react-native'


const AboutScreen = (props) => {

const text = props.navigation.getParam('text', 'ini adalah nilai default param text')
   return (
     <View>
     <Text>{ text }</Text>
     </View>
   )
 }

 export default AboutScreen
