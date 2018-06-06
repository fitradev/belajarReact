import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';//tempat menambah komponen

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      header: 'Kalkulator',
      hasil: 0,
      angka1: ''

    }
  }

  // hitung = () =>{
  //   const {angka1, angka2} = this.state
  //   this.setState({hasil: angka1 + angka2})
  hitung = () => {
    const {angka1} = this.state
    this.setState({hasil: eval(angka1.valueOf())})
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={ {fontSize:32}}> {this.state.header}</Text>

      <TextInput
      style={styles.inputBox}
        value={ String(this.state.angka1)}
         onChangeText={(text) => this.setState({angka1: text})
       }
          />

         <Button title="klik"
         onPress={this.hitung}/>
         <Text style={{fontSize:25}}> Hasil </Text>
            <Text style={{fontSize:20}}> {this.state.hasil} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 32
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin: 6
  }
});
