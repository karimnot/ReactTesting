import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  Image,
  TouchableOpacity,
  View
} from 'react-native';

const MAXCHAR = 150;

const shortDescription = function (desc){
	return desc.length < MAXCHAR ? desc : desc.substring(0, MAXCHAR).concat(" ", "[...]");
};

export default class ProductItemView extends Component {
	render(){
		return(
			<TouchableOpacity style={styles.cardContainer}>
				<View style={styles.imageView}>
					<Image
						style={styles.imageStyle}
						resizeMode="stretch"	
						source={{uri:('http://happyapple.com/wp-content/uploads/2017/04/nugv5-300x264.png')}} 
					/>
				</View>
				<View style={styles.descriptionView}>
					<View style={{flex:1}}>
						<Text style={styles.titleStyle}>Tahoe OG</Text>
						<Text style={styles.descriptionStyle}>
							{shortDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
						</Text>
					</View>
					<View style={styles.priceView}>
						<View style={styles.elementView}>
							<View style={styles.promotionsView}>
								<Text style={styles.promotionsFont}>New</Text>
							</View>
						</View>
						<View style={styles.elementView}>
							<Text style={styles.priceFont}>$ 9.90</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>				
		);
	}
}


const styles = StyleSheet.create({
	cardContainer:{
		height: 150,
		flexDirection: 'row',
		backgroundColor:'white',		
		borderRadius: 10,
		margin: 5,
	},
	imageView: {
		width: 120,
		alignItems: 'center',
		justifyContent: 'center', 
		backgroundColor:'transparent',
		borderColor: 'lightgray',
		borderRightWidth: 1
	},
	descriptionView: {
		flex: 1,
		backgroundColor:'transparent',		
	},
	imageStyle: {
		height: 100,
		width: 100
	}, 
	titleStyle:{
		fontSize: 15,
		fontWeight: 'bold',
		letterSpacing: 1.5,
		padding: 10, 
	},
	descriptionStyle:{
		fontSize: 10,
		fontStyle: 'normal',
		letterSpacing: 1,
		paddingRight: 10,
		paddingLeft: 10
	},	
	priceView: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
		justifyContent: 'space-between',
		height: 40,
	},
	elementView: {
		justifyContent: 'center',
		alignItems: 'center',	
		width: 100,
		backgroundColor: 'transparent',
		borderRadius: 10,
	},
	promotionsView:{
		justifyContent: 'center',
		alignItems: 'center',			
		backgroundColor: 'green',
		padding: 5,
		borderRadius: 10,
		width: 70
	},	
	promotionsFont:{
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold'
	},
	priceFont:{
		color: 'green',
		fontSize: 18,
		fontWeight: 'bold'
	}
});