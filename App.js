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

import Card from './src/components/Card';

export default class App extends Component {
	
	render() {
	 
	
		return (
			<ScrollView style={{						
							flex: 1,
							backgroundColor: 'red'
					}}
			>
			<View style={{						
					flex: 1,
					flexDirection: 'column',
					backgroundColor: 'white',}}
			>
				<Card title='Whopper Jr' 
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
				/>				
				<Card title='Whopper Doble'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' 
				/>				
				<Card title='Whopper Deluxe'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u' 				
				/>									
			</View>
			</ScrollView>
			
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
	titleStyle:{
		color:'white',
		fontSize: 20
	}
});