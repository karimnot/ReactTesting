import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import HelloWorld from './components/HelloWorld';
import Props from './components/Props';
import PropsStyle from './components/PropsStyle';
import LotsOfGreetings from './components/PropsMessages';
import States from './components/States';
import StylesApp from './components/StylesApp';
import Dimension from './components/Dimension';
import FlexDimension from './components/FlexDimension';
import LayoutFlexDirection from './components/LayoutFlexDirection';
import LayoutJustifyContent from './components/LayoutJustifyContent';
import LayoutAlign from './components/LayoutAlign';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/*
        <HelloWorld /> 
        <Props /> 
        <PropsStyle /> 
        <LotsOfGreetings />
        <States />
        <StylesApp />
        <Dimension />
        <FlexDimension />
        <LayoutFlexDirection />
        <LayoutJustifyContent />        
        */}
        <LayoutAlign />
      </View>
    );
  }
}


