import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image, 
  ScrollView,
  ImageBackground
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
			<ScrollView style={{						
							flex: 1,
							backgroundColor: 'red'
					}}
			>
			<View style={{						
					flex: 1,
					flexDirection: 'column',
					backgroundColor: 'darkgray',}}
			>
				<View     
					style={{					
						height: 300,
						flexDirection: 'column',
						backgroundColor: 'blue',
					}} 
				>
					<ImageBackground
						style={{
							flex: 1,
							flexDirection: 'column',
							borderWidth: 1
						}}
						source={{uri:('https://i.pinimg.com/736x/a1/ec/dc/a1ecdc1ce19688bc1b02140439ce576e--product-photography-photography-ideas.jpg')}}					
						resizeMode="stretch"
					>
						<Text>Texto jdjd</Text>
					</ImageBackground>				
				</View>					
				<View     
					style={{					
						height: 300,
						flexDirection: 'column',
						backgroundColor: 'blue',
					}} 
				>
					<Image
						style={{
							flex: 1,
							flexDirection: 'column',
							borderWidth: 1
						}}
						source={{uri:('https://i.pinimg.com/736x/a1/ec/dc/a1ecdc1ce19688bc1b02140439ce576e--product-photography-photography-ideas.jpg')}}					
						resizeMode="stretch"
					/>				
				</View>				
			</View>
			</ScrollView>
			
		);
    	}
}


