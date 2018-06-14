// import React from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//
//
// export default class App extends React.Component {
//   static navigationOptions = {
//     title: 'Login'
//
//   }
//   constructor(){
//     super()
//     this.state = {
//       header: 'Ular Tangga',
//       username: ''
//
//     }
//     this.masuk = this.masuk.bind(this)
//   }
//
// Username(name) {
//   this.setState({ username: name })
// }
//
// Login() {
//   let name = this.state.name
//   if (name == '') {
//     alert('nama belum dimasukan')
//   } else {
//     this.props.navigation.navigate('Page', { name: name })
//   }
// }
//
//
//
//
//   render() {
//
//     const {showAbout} = this.state
//
//     return (
//       <View style={styles.container}>
//       <Text style={styles.logoText}> {this.state.header}</Text>
//       <TextInput
//       style={styles.inputBox}
//       placeholder="Username"
//       placeholderTextColor = "#ffffff"
//       selectionColor="#fff"
//       onChangeText={(name) => this.Username(name)}
//       ></Text>
//
//
//
//       <Button title="Login"
//         onPress={this.Login}/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#455a64',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 32
//   },
//   inputBox: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 6,
//     padding: 12,
//     margin: 6,
//     color:'#ffffff',
//   } ,
//
//
// logoText : {
// marginVertical: 15,
// fontSize:32,
// color:'rgba(255, 255, 255, 0.7)'
// }
//
// });
