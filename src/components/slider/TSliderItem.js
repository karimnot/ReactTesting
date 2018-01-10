import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image, 
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';


const _WIDTH = 200;
const _IMAGE_HEIGTH = 150;

export default class TSliderItem extends React.Component {
	render(){
		return(
			<TouchableOpacity style={styles.productView}>
				<View style={styles.imageView}>
					<ImageBackground 
						style={styles.imageStyle}
						source={{uri:('http://happyapple.com/wp-content/uploads/2017/04/nugv5-300x264.png')}} 
						
					>
						<View style={styles.favView}>
							<Text style={styles.favText}>New</Text>
						</View>					
					</ImageBackground>
				</View>
				<View style={styles.infoView}>
					<Text style={styles.titleFont}>Titulo</Text>
					<View style={styles.priceView}>
						<Text style={styles.priceLineFont}>Precio</Text>
						<Text style={styles.priceFont}>Precio</Text>
					</View>
					<Text style={styles.weigthFont}>Medida</Text>
				</View>				
			</TouchableOpacity>	
		);
	}
}


const styles = StyleSheet.create({
	productView:{
		width: _WIDTH,
		backgroundColor: 'lightgray' 
	},
	imageView:{
		height: _IMAGE_HEIGTH,
		borderRadius: 10,
		margin: 10,
		backgroundColor: 'white',
		
	},
	infoView:{
		flex: 1,
		alignItems: 'center'
	},
	titleFont:{
		fontSize: 16,
		color: 'black',
		fontWeight: 'bold'
	},
	priceView:{
		flexDirection: 'row'
	},	
	priceFont:{
		fontSize: 13,
		color: 'black',
		fontWeight: 'bold',
		marginLeft: 10,
		marginRight: 10
	},
	priceLineFont:{
		fontSize: 13,
		color: 'black',
		textDecorationLine: 'line-through', 		
		marginLeft: 10,
		marginRight: 10
	},	
	weigthFont:{
		fontSize: 10,
		color: 'black',
	},
	imageStyle:{
		flex: 1, 
		flexDirection: 'row',
		justifyContent: 'flex-end',
		backgroundColor: 'transparent',
		margin: 10
	},	
	favView: {
		backgroundColor: 'green',
		borderColor: 'transparent',		
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 30,
		width: 80,
		borderRadius: 10,
	},
	favText: {
		fontSize: 15,
		color: 'white',
		fontWeight: 'bold'
	},	
});


