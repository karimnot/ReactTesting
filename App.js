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


import CartScreen from './src/components/cart/CartScreen';



export default class App extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
				</View>			
				<View style={styles.content}>
					<CartScreen />
				</View>
			</View>
			);
    	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header:{
		height: 100,
		backgroundColor:'white',		
	},
	content:{
		flex: 1,
		backgroundColor:'blue',				
	}	
});