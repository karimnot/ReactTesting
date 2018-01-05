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

import ProductList from './src/components/ProductList';
import ProductDetail from './src/components/ProductDetail';
import BottomMenu from './src/BottomMenu';
import CategoryView from './src/components/CategoryView'
import ProductsView from './src/components/ProductsView'
import ProductDetailView from './src/components/ProductDetailView'


export default class App extends Component {
	
	render() {
	 
	
		return (
			<View style={{flex: 1}}>
				<Header title='Product List'/>
				<View style={{flex:1}}>
				<ProductDetailView item={{ 
									id: 2,
									name: 'name',
									description: 'desc',
									img: 'http://happyapple.com/wp-content/uploads/2017/04/nugv5-300x264.png'
									}} />
				</View>
				
			</View>
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