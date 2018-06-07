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
  calculate(num1, num2, operand) {
    let calc;

    switch(operand) {
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
      const regexRemoveSpace = /\s/g;
      const regexOnlyOperand = /[\+\-\*\/\:\%\^\x]/g;
      const textArr = text.replace(regexRemoveSpace, '').split('');
      const newArr = [];
      let join = '';

      for (let index1 = 0; index1 < textArr.length; index1++) {
        if (textArr[index1].match(regexOnlyOperand)) {
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
        let operand = newArr[index2 + 1];
        let num2 = newArr[index2 + 2];
        let calc = this.calculate(num1, num2, operand);
        newArr[index2 + 2] = calc;
        index2 = index2 + 2;
        this.setState({text: text, hasil: calc});
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={ {fontSize:32}}> {this.state.header}</Text>

      <TextInput
      style={styles.inputBox}
           onChangeText={(text) => this.show(text)}

          />


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
