import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';


export default class Card extends Component {
	render(){
		return(
			<TouchableOpacity style={styles.cardContainer}>
				<ImageBackground
					style={styles.imageContainer}
					source={{uri:('https://i.pinimg.com/736x/a1/ec/dc/a1ecdc1ce19688bc1b02140439ce576e--product-photography-photography-ideas.jpg')}}					
					resizeMode="stretch"
				>
					<Text style={styles.titleStyle}>kdjdjd</Text>
				</ImageBackground>	
			</TouchableOpacity>				
		);
	}
}


const styles = StyleSheet.create({
	cardContainer:{
		height: 200,
		flexDirection: 'column',
	},
	imageContainer: {
		flex: 1,
		backgroundColor:'transparent',
		justifyContent: 'center',
		alignItems: 'center' 
	},
	titleStyle:{
		color:'white',
		fontSize: 20
	}
});