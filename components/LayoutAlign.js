import React, {Component} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

export default class AlingItemBasics extends Component {
	render(){
		return(
			<View style={styles.vistaLayout}>
				<View style={{width:50, height:50, backgroundColor:'powderblue'}}/>
				<View style={{width:50, height:50, backgroundColor:'skyblue'}}/>
				<View style={{width:50, height:50, backgroundColor:'steelblue'}}/>				
			</View>
		);
	}
};

//options
//flexDirection: row, column
//justifyContent:  flex-start, center, flex-end, space-around,  space-between.
//align: flex-start, center, flex-end, and stretch.
const styles = StyleSheet.create({
	vistaLayout: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});


