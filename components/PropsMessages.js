import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';

class Greeting extends Component{
	render(){
		return (
			<Text> Hello {this.props.name}!</Text>
		);
	}
}

export default class LotsOfGreetings extends Component{
	render(){
		return(
			<View>
				<Greeting name='Juanito' />
				<Greeting name='Maria' />
				<Greeting name='Pedro' />				
			</View>
		);
	}
}
