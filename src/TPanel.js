import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text
} from 'react-native';


export default class TPanel extends Component {
	render(){
		return(
			<View>
				<Text>kdkdk</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	panelStyle: {
		flex: 5,
		backgroundColor: 'black',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',		
	}
});