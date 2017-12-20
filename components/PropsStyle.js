import React, {Component} from 'react';
import {
	Image,
	StyleSheet
} from 'react-native';

export default class Bananas extends Component {
	render(){
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
			<Image source={pic} style={styles.mainImage} />
		);
	}
}



const styles = StyleSheet.create({
	mainImage: {
		width:200, 
		height: 110
	}
});