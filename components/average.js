/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';

export default class Average extends Component {
  state: {
    inputValueA: number,
    inputValueB: number,
    average: number
  };
  constructor(){
    super();
    this.state = {
      inputValueA: 0,
      inputValueB: 0,
      average: 0
    }
  }
  calculateAverage(a: number, b: number) {
    let value:number  = (parseInt(a) + parseInt(b))/2;
    if(this.refs.averageValue){
      this.setState({average: value});
    }
    return value;
  }
  setStateValueA(val: number){
    if(this.refs.inputRefA){
      this.setState({inputValueA: val})
    }
  }
  setStateValueB(val: number){
    if(this.refs.inputRefB){
      this.setState({inputValueB: val})
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Average of A and B = {this.state.average}
        </Text>
        <Text>Value of A:</Text>
        <TextInput
            placeholder = "Value of A"
            style={styles.textInput}
            keyboardType = 'numeric'
            ref = "inputRefA"
            onChangeText={(val)=>(this.setStateValueA(val))}
            value = {this.state.inputValueA.toString()}
        />
        <Text>Value of B:</Text>
        <TextInput
            placeholder = "Value of B"
            style={styles.textInput}
            keyboardType = 'numeric'
            ref = "inputRefB"
            onChangeText={(val) => (this.setStateValueB(val))}
            value = {this.state.inputValueB.toString()}
        />
        <Button
          onPress={()=>(this.calculateAverage(this.state.inputValueA, this.state.inputValueB))} style={styles.Button}
          title="Calculate Average"
          ref = "averageValue"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  button: {
    height: 40,
    borderColor: 'gray',
    textAlign: 'center',
    borderWidth: 1
  },
  textInput: {
    height: 40,
    alignSelf: 'center',
    borderColor: 'gray',
    textAlign: 'center',
    lineHeight: 100,
    borderWidth: 1,
    width: 100,
    marginBottom: 20
  }
});
