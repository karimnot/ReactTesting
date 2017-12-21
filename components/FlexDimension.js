import React, {Component} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

export default class FixedDimensionsBasic extends Component{
	render(){
		return (
			<View style={{flex: 1}}>
				<View style={styles.verdeSmall}/>
				<View style={styles.AzulMedium}/>
				<View style={styles.AzulLarge}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	verdeSmall: {
		flex: 1,
		backgroundColor: 'powderblue'
	},
	AzulMedium: {
		flex: 3,
		backgroundColor: 'skyblue'		
	},
	AzulLarge: {
		flex: 1,
		backgroundColor: 'steelblue'
	}
});
