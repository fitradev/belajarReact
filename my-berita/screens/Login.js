import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Platform } from 'react-native'

class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }

  constructor() {
    super()
    this.state = {
      nama: ''
    }

    this.goToGame = this.goToGame.bind(this)
  }

  getNama(nama) {
    this.setState({ nama: nama })
  }

  goToGame() {
    let nama = this.state.nama
    if (nama == '') {
      alert('Anda belum memasukkan nama!')
    } else {
      this.props.navigation.navigate('Papan', { nama: nama })
    }
  }

  render() {
    const { nama } = this.state
    return (
      <View style={styles.container}>
        <Text
          style={styles.logoText}>Ular Tangga</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor = "#ffffff"
          selectionColor="#fff"
          onChangeText={(nama) => this.getNama(nama)} />
        <View style={styles.containerButton}>
          <Button
            style={styles.button}
            title="Login"
            onPress={this.goToGame} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  input: {
    color:'#ffffff',
    height: 50,
    width: 280,
    fontSize: 18,
    padding: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    marginBottom: 10,
    ...Platform.select(
      {
        ios: {
          borderColor: 'gray',
          borderWidth: 1,
        }
      }
    )
  },
  containerButton: {
    padding: 10,
    ...Platform.select({
      ios: {
        backgroundColor: 'orange',
      }
    }),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginRight: 20,
    marginLeft: 20
  },
  button: {
    color: 'white',
    borderWidth: 1,
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoText : {
    marginVertical: 15,
    fontSize:32,
    color:'rgba(255, 255, 255, 0.7)'
    }
})

export default LoginScreen
