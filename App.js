import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import HelloWorld from './components/HelloWorld';
import Props from './components/Props';
import PropsStyle from './components/PropsStyle';

export default class App extends Component {
  render() {
    return (
      <View>
      {/*   <HelloWorld /> */}
      {/*       <Props /> */}
          <PropsStyle />
      </View>
    );
  }
}


