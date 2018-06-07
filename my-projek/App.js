import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import About from './components/About.js'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      header: 'Kalkulator',
      hasil: 0,
      angka1: '',
      showAbout: false
    }
  }
  calculate(num1, num2, operator) {
    let calc;

    switch(operator) {
      case '+': calc = num1 + num2; break;
      case '-': calc = num1 - num2; break;
      case '*': calc = num1 * num2; break;
      case 'x': calc = num1 * num2; break;
      case '/': calc = num1 / num2; break;
      case ':': calc = num1 / num2; break;
      case '%': calc = num1 % num2; break;
      case '^': calc = Math.pow(num1, num2); break;
    }

    return calc;
  }

  show(text) {
    if (!isNaN(Number(text))) {
      this.setState({angka1: text, hasil: Number(text)});
    } else {
      const hapusSpasi = /\s/g;
      const ambilOperator = /[\+\-\*\/\:\%\^\x]/g;
      const textArr = text.replace(hapusSpasi, '').split('');
      const newArr = [];
      let join = '';

      for (let index1 = 0; index1 < textArr.length; index1++) {
        if (textArr[index1].match(ambilOperator)) {
          newArr.push(textArr[index1]);
          join = '';
        } else {
          if (join != '') {
            newArr.pop();
            join += textArr[index1];
            newArr.push(Number(join));
          } else {
            join += textArr[index1];
            newArr.push(Number(textArr[index1]));
          }
        }
      }

      let index2 = 0;
      while (index2 < newArr.length - 2) {
        let num1 = newArr[index2];
        let operator = Arr[index2 + 1];
        let num2 = newArr[index2 + 2];
        let calc = this.calculate(num1, num2, operator);
        newArr[index2 + 2] = calc;
        index2 = index2 + 2;
        this.setState({text: text, hasil: calc});
      }
    }
  }


  render() {

    const {showAbout} = this.state
    return (
      <View style={styles.container}>
      <Text style={ {fontSize:32}}> {this.state.header}</Text>
      <TextInput
      style={styles.inputBox}
           onChangeText={(text) => this.show(text)} />

         <Text style={{fontSize:25}}> Hasil </Text>
            <Text style={{fontSize:20}}> {this.state.hasil} </Text>
            {
              showAbout ?
                <Button title="Kembali"
                  onPress = { () => this.setState({showAbout: false}) }/>

            :
                <Button title= "Tentang"
                  onPress = { () => this.setState({showAbout: true}) }/>
          }

            {
              showAbout && <About deskripsi={"Become to Expert"}/>
            }
            {
              showAbout || <About deskripsi={"Fitra Dev"}/>
            }
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
