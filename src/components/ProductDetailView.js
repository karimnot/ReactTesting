import React, {Component} from 'react';
import {
	View,
	Image,
	StyleSheet,
	Button,
	Alert,
	Text,
	ScrollView,
	TouchableOpacity
} from 'react-native';

export default class ProductDetailView extends Component {

	onPressFavButton() {
		Alert.alert('Fav button has been clicked');
	}

	onPressOrderButton() {
		Alert.alert('Order button has been clicked');
	}	

	render(){
		return(
				<View style={styles.workArea}>
					<View style={styles.favView}>
						<Text style={styles.favText}>New</Text>
					</View>
					<View style={styles.imageView}>
						<Image
							style={styles.imageStyle}
							resizeMode="stretch"
							source={{uri:(this.props.item.img)}}
						/>
					</View>
					<View style={styles.informationView}>
						<View style={styles.descriptionView}>
							<View style={styles.wqView}>
								<View style={styles.weightView}>
									<Text style={styles.labelFont}>Weight</Text>	
									<View style={styles.componentView}>
									</View>								
								</View>	
								<View style={styles.quantityView}>
									<Text style={styles.labelFont}>Quantity</Text>	
									<View style={styles.componentView}>
									</View>																	
								</View>															
							</View>									
							<TouchableOpacity style={styles.detailLabView}>
								<Text style={styles.menuFont}>Product Details</Text>
								<Text style={styles.menuFont}> > </Text>
							</TouchableOpacity>									
							<TouchableOpacity style={styles.detailLabView}>
								<Text style={styles.menuFont}>Lab Results</Text>
								<Text style={styles.menuFont}> > </Text>								
							</TouchableOpacity>									
						</View>
						<View style={styles.buttonView}>
							<View style={styles.priceView}>
								<Text style={styles.priceFont}>$19.90</Text>
							</View>									
							<TouchableOpacity style={styles.actionView}>
								<Text style={styles.buttonFont}>Add to Cart</Text>
							</TouchableOpacity>	
						</View>						
					</View>	
				</View>
		);
	}
}

const styles = StyleSheet.create({
	workArea:{
		flex: 1,
		backgroundColor: 'white',
		borderColor: 'transparent',				
	},
	favView: {
		backgroundColor: 'green',
		borderColor: 'transparent',		
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 30,
		width: 80,
		marginTop: 10,
		borderRadius: 10,
		marginLeft: 10
	},
	favText: {
		fontSize: 15,
		color: 'white',
		fontWeight: 'bold'
	},
	imageView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',		
		backgroundColor: 'transparent',
		height: 250,
		padding: 10,
		marginLeft: 10,
		marginRight: 10	
	},
	imageStyle:{
		flex: 1,
		height: 220,		
	},
	informationView: {
		flex: 1,
		backgroundColor: 'transparent',	
		borderColor: 'gray',
		borderTopWidth: 1	
	},
	descriptionView:{
		flex: 1,
		backgroundColor: 'lightgray',		
		borderColor: 'gray',
		borderBottomWidth: 1	
	},
	buttonView:{
		flexDirection: 'row',
		justifyContent: 'flex-end',
		height: 70,
		backgroundColor: 'white',		
	},
	priceView:{
		alignItems: 'center',				
		justifyContent: 'center',			
		width: 100,
		borderColor: 'gray',
		borderRightWidth: 1,		
	},
	actionView:{
		alignItems: 'center',				
		justifyContent: 'center',			
		flex: 1,
		backgroundColor: 'green'
	},
	wqView:{
		flexDirection: 'row',		
		height: 110,
		backgroundColor: 'white',		
		borderColor: 'gray',
		borderBottomWidth: 1,
	},
	weightView:{
		flex: 1,
		borderColor: 'gray',
		borderRightWidth: 1,
		padding: 10		
	},
	quantityView:{
		flex: 1,
		padding: 10		
		
	},
	detailLabView:{
		flexDirection: 'row',
		alignItems: 'center',				
		justifyContent: 'space-between',		
		height: 70,
		backgroundColor: 'lightgray',		
		borderColor: 'gray',
		borderBottomWidth: 1,
		padding: 10		
	},
	menuFont:{
		color: 'black',
		fontSize: 18,
	},
	labelFont:{
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 5
	},
	componentView:{
		flex: 1,
	},
	priceFont:{
		color: 'green',
		fontSize: 20,
		fontWeight: 'bold',
	},
	buttonFont:{
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},		
});


