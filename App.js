/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {AppNavigator} from "./src/config/router";


export default class App extends Component<{}> {
  render() {
    return (
    <AppNavigator/>
    );
  }
}
