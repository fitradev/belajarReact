import React, {Component} from 'react'
import {Text, View} from 'react-native'

const About = (props) => {
  const {deskripsi} = props

  return(
    <View>
    <Text>Tentang aplikasi</Text>
    <Text>{deskripsi}</Text>
    </View>
  )
}

export default About
