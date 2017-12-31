import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image, 
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';


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
import TextInput from './components/TextInput';
import Touches from './components/Touches';
import ScrollViewUse from './components/ScrollViewUse';
import ListUse from './components/ListUse';
import Fetch from './components/Fetch';

import Plataform from './components/Plataform';

import Header from './src/Header';
import TPanel from './src/TPanel'


export default class App extends Component {
	
	render() {
	 
	
		return (
			<ImageBackground
			source={require('./src/image/background.png')}
			style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
			</ImageBackground>	
					
			
		);
    	}
}


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor:'transparent',
	  justifyContent: 'center',
	  alignItems: 'center' 
	},
   });