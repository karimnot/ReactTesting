import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native'; 

import TCardItem from './TCardItem';

export default class CartScreen extends React.Component {
	render (){
		return(
			<View style={styles.containers}>
				<ScrollView style={styles.productsView}>
					<TCardItem />
					<TCardItem />
					<TCardItem />
				</ScrollView>		
				<View style={styles.shippingView}>
					<Text style={styles.labelFont}>Shipping Method</Text>
					<View style={styles.combobox}>
						<Text>Standard (45 mins)</Text>
					</View>				
				</View>
				<View style={styles.actionsView}>
					<View style={styles.priceView}>
						<Text>Total</Text>
						<Text style={styles.priceFont}>$19.90</Text>
					</View>									
					<TouchableOpacity style={styles.actionView}>
						<Text style={styles.buttonFont}>Order</Text>
					</TouchableOpacity>	
				</View>	
			</View>
		);
	}	
}


const styles = StyleSheet.create({
	containers: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: 'red'
	},
	productsView: {
		flex: 1,
		backgroundColor: 'lightgray'
	},

	//SHIPPING VIEW
	shippingView: {
		height: 80,
		backgroundColor: 'white',
		paddingLeft: 10,

	},
	labelFont:{
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 5
	},	
	combobox: {
		flex: 1,
		justifyContent: 'center'
	},


	//ACTIONS VIEW
	actionsView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',	
		backgroundColor: 'white',		
		height: 70,
	},
	priceView:{
		alignItems: 'center',				
		justifyContent: 'center',			
		width: 100,
		borderColor: 'gray',
		borderRightWidth: 1,		
	},	
	actionView:{
		alignItems: 'center',				
		justifyContent: 'center',			
		flex: 1,
		backgroundColor: 'green'
	},	
	priceFont:{
		color: 'green',
		fontSize: 20,
		fontWeight: 'bold',
	},
	buttonFont:{
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},		
});