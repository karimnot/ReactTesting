import React, {Component} from 'react';
import {
	View, 
	Text,
	Platform
} from 'react-native';

export default class PlataformTest extends Component {
	render() {
		return(
			<View>
				<Text>Estas utilizando: {Platform.OS}</Text>
			</View>
		);
	}
};

