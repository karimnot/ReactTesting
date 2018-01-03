import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const shortDescription = function (desc){
	return desc.length < 200 ? desc : desc.substring(1,200).concat(" ", "[...]");
};

export default class ProductItem extends Component {
	render(){
		return(
			<TouchableOpacity style={styles.cardContainer}>
				<ImageBackground
					style={styles.imageContainer}
					source={{uri:(this.props.img)}}				
					resizeMode="stretch"
				>
					<Text style={styles.titleStyle}>{this.props.name}</Text>
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