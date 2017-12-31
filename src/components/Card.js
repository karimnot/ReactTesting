import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const shortDescription = function (desc){
	return desc.length < 200 ? desc : desc.substring(1,200).concat(" ", "[...]");
};

export default class Card extends Component {
	render(){
		return(
			<TouchableOpacity style={styles.cardContainer}>
				<ImageBackground
					style={styles.imageContainer}
					source={{uri:('https://i.pinimg.com/736x/a1/ec/dc/a1ecdc1ce19688bc1b02140439ce576e--product-photography-photography-ideas.jpg')}}					
					resizeMode="stretch"
				>
					<Text style={styles.titleStyle}>{this.props.title}</Text>
					<Text style={styles.descriptionStyle}> {shortDescription(this.props.description)} </Text>
				</ImageBackground>	
			</TouchableOpacity>				
		);
	}
}


const styles = StyleSheet.create({
	cardContainer:{
		height: 250,
		flexDirection: 'column',
		backgroundColor:'transparent',		
		paddingTop: 5,
		paddingBottom: 2,
		paddingLeft: 5,
		paddingRight: 5
	},
	imageContainer: {
		flex: 1,
		backgroundColor:'transparent',
		justifyContent: 'center',
		alignItems: 'center' 
	},
	titleStyle:{
		color:'white',
		fontSize: 35,
		fontWeight: 'bold',
		letterSpacing: 1.5,
		paddingBottom: 10
	},
	descriptionStyle:{
		color:'white',
		fontSize: 15,
		fontStyle: 'italic',
		letterSpacing: 1,
		paddingRight: 20,
		paddingLeft: 20
	},	
});