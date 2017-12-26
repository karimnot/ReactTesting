import React, {Component} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

export default class JustifyContentBasics extends Component {
	render(){
		return(
			<View style={styles.vistaPrimaria}>
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
const styles = StyleSheet.create({
	vistaPrimaria: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
});

