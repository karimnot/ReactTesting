import React, {Component} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

export default class FixedDimensionsBasic extends Component{
	render(){
		return (
			<View>
				<View style={styles.verdeSmall}/>
				<View style={styles.AzulMedium}/>
				<View style={styles.AzulLarge}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	verdeSmall: {
		width: 50,
		height: 50,
		backgroundColor: 'powderblue'
	},
	AzulMedium: {
		width: 100,
		height: 100,
		backgroundColor: 'skyblue'		
	},
	AzulLarge: {
		width: 150,
		height: 150,
		backgroundColor: 'steelblue'
	}
});
