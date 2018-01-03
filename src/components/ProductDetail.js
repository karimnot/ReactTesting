import React, {Component} from 'react';
import {
	View,
	Image,
	StyleSheet,
	Button,
	Alert,
	Text,
	ScrollView
} from 'react-native';

export default class ProductDetail extends Component {

	onPressFavButton() {
		Alert.alert('Fav button has been clicked');
	}

	onPressOrderButton() {
		Alert.alert('Order button has been clicked');
	}	

	render(){
		return(
			<View style={styles.containerView}>
				<View style={styles.workArea}>
					<ScrollView>
						<View style={styles.favView}>
							<Button 
								style={styles.favButton}
								onPress={ this.onPressFavButton }
								title="Love it"
							/>
						</View>
						<Image
							style={styles.imageStyle}
							resizeMode="stretch"
							source={{uri:(this.props.item.img)}}
						/>
						<View style={styles.titleView}>
							<Text style={styles.titleText}>{this.props.item.name}</Text>
						</View>
						<View style={styles.informationView}>
							<Text style={styles.descriptionText}>{this.props.item.description}</Text>
						</View>	
						<View>
							<Button 
								onPress={ this.onPressOrderButton }
								title="Order"
							/>
						</View>	
					</ScrollView>
				
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerView: {
		flex: 1, 
		backgroundColor: 'lightgray',
		borderColor: 'transparent',		
		borderBottomWidth: 10,
		borderTopWidth: 10,
		borderLeftWidth: 10,
		borderRightWidth: 10		
	},
	workArea:{
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 10,
		borderColor: 'transparent',		
		borderLeftWidth: 15,
		borderRightWidth: 15			
	},
	favView: {
		backgroundColor: 'white',
		borderColor: 'transparent',		
		flexDirection: 'row',
		height: 60,
		borderBottomWidth: 10,
		borderTopWidth: 10,
		borderLeftWidth: 10,
		borderRightWidth: 10,
		borderRadius: 10		
	},
	favButton: {
	},
	imageStyle:{
		height: 250,
		borderColor: 'lightgray',		
		borderBottomWidth: 30,
		borderTopWidth: 10,
		borderLeftWidth: 10,
		borderRightWidth: 10			
	},
	titleView:{
		//alignItems: 'center',
		borderColor: 'lightgray',
		borderBottomWidth: 1
	},
	informationView: {

	},
	titleText: {
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 25,
		fontWeight: 'bold'
	},
	descriptionText: {
		fontStyle: 'normal',
		color: '#969696',
		paddingTop: 30,
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 50		
	},
	orderButton:{
		
	}
});


