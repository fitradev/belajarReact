import React from 'react'
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class DetailScreen extends React.Component {

  static navigationOptions = {
    title: 'Detail'
  }

  render() {

    const item = this.props.redux.item

    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Text
            style={styles.title}>
            {item.title}</Text>
          <Image
            source={{
              uri: item.urlToImage ? item.urlToImage : 'http://via.placeholder.com/100x200'
            }}
            style={styles.image} />
          <Text
            style={styles.description}>
            {item.description ? item.description : 'Tidak ada deskripsi berita.'}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    height: 200,
    padding: 10,
    marginTop: 10,
  },
  description: {
    flex: 1,
    marginTop: 10,
    fontSize: 16,
  }
})

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

export default connect(mapStateToProps)(DetailScreen)
