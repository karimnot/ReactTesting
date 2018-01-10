import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image
} from 'react-native';


export default class TCardItem extends React.Component {
	render(){
		return(
			<View style={styles.itemView}>
				<View style={styles.imageView}>
					<Image 
						style={styles.imageStyle}
						source={{uri:('http://happyapple.com/wp-content/uploads/2017/04/nugv5-300x264.png')}} 
					/>
				</View>

				<View style={styles.infoView}>

					<View style={styles.titleView}>
						<Text style={styles.titleFont}>Tahoe OG</Text>
						<View style={styles.priceView}>
							<Text style={styles.priceFont}>$9.99</Text>
						</View>
						<Text style={styles.totalFont}>$19.99</Text>
					</View>

					<View style={styles.countView}>
						<Text style={{fontSize: 20, backgroundColor:'lightgray', padding: 5}}>+   3   -</Text>					
					</View>

				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemView: {
		flexDirection: 'row',
		height: 110,
		backgroundColor: 'white',
		margin: 10,
		marginBottom: 0,
		borderRadius: 10
	},
	imageView:{
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		padding: 10
	},
	infoView:{
		flex: 1, 
		flexDirection: 'row',
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,	
		borderColor: 'lightgray',	
		borderLeftWidth: 1,
		padding: 10
	},
	imageStyle:{
		height: 70,
		width: 70,
		borderWidth: 0
	},
	titleView: {
		flex: 3, 
	},
	countView:{
		flex: 2, 
		justifyContent: 'center',
		alignItems: 'center',		
	},
	titleFont:{
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 0
	},	
	priceFont:{
		color: 'gray',
		fontSize: 13,
		paddingTop: 0
	},	
	totalFont:{
		color: 'green',
		fontSize: 16,
		fontWeight: 'bold',
	},	
	priceView:{
		flex: 1,
	}		
});