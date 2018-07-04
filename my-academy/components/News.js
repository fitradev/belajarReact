import React from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import moment from 'moment'

_changeTime = (time) => {
  require('moment/locale/id')

  return moment(time).fromNow()
}

const News = (props) => {

  const { news } = props

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: news.urlToImage ? news.urlToImage : 'http://via.placeholder.com/80x80' }}
        style={styles.image} />
      <View style={styles.right}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.source}>{news.source.name}</Text>
        <Text style={styles.time}>{_changeTime(news.publishedAt)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5
  },
  image: {
    width: 80,
    height: 80,
    padding: 10,
    flex: 1
  },
  right: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 10
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold'
  },
  source: {
    flex: 1,
    fontSize: 12,
  },
  time: {
    flex: 1,
    fontSize: 10,
  }
})

export default News
