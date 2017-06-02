/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Average from './components/average'

export default class testingSample extends Component {
  render() {
    return (
      <Average></Average>
    );
  }
}

AppRegistry.registerComponent('testingSample', () => testingSample);
