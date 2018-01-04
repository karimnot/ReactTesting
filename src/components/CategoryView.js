import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Image,
	Text,
	TouchableOpacity
} from 'react-native';


export default class CategoryView extends Component {

	render(){
		return(
			<View style={styles.containerCategory}>
				<View style={styles.rowView}>
					<TouchableOpacity style={styles.categoryView}>
						<View style={styles.imageView}>
							<Image 
								style={styles.imageStyle}
								source={{uri:('https://cdn.iconverticons.com/files/png/2305bfce1ba7642b_256x256.png')}}
							/>
						</View>
						<View style={styles.titleView}>
							<Text style={styles.titleFont}>Flowers</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.categoryView}>
						<View style={styles.imageView}>
							<Image 
								style={styles.imageStyle}
								source={{uri:('https://cdn.iconverticons.com/files/png/2305bfce1ba7642b_256x256.png')}}
							/>
						</View>
						<View style={styles.titleView}>
							<Text style={styles.titleFont}>Concentrates</Text>
						</View>					
					</TouchableOpacity>
				</View>
				<View style={styles.rowView}>
					<TouchableOpacity style={styles.categoryView}>
						<View style={styles.imageView}>
							<Image 
								style={styles.imageStyle}
								source={{uri:('https://cdn.iconverticons.com/files/png/2305bfce1ba7642b_256x256.png')}}
							/>
						</View>
						<View style={styles.titleView}>
							<Text style={styles.titleFont}>Edibles</Text>
						</View>					
					</TouchableOpacity>
					<TouchableOpacity style={styles.categoryView}>
						<View style={styles.imageView}>
							<Image 
								style={styles.imageStyle}
								source={{uri:('https://cdn.iconverticons.com/files/png/2305bfce1ba7642b_256x256.png')}}
							/>
						</View>
						<View style={styles.titleView}>
							<Text style={styles.titleFont}>Pre Rolls</Text>
						</View>					
					</TouchableOpacity>
				</View>
				<View style={styles.rowView}>
					<TouchableOpacity style={styles.categoryView}>
						<View style={styles.imageView}>
							<Image 
								style={styles.imageStyle}
								source={{uri:('https://cdn.iconverticons.com/files/png/2305bfce1ba7642b_256x256.png')}}
							/>
						</View>
						<View style={styles.titleView}>
							<Text style={styles.titleFont}>Gear</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.categoryView}>
						<View style={styles.imageView}>
							<Image 
								style={styles.imageStyle}
								source={{uri:('https://cdn.iconverticons.com/files/png/2305bfce1ba7642b_256x256.png')}}
							/>
						</View>
						<View style={styles.titleView}>
							<Text style={styles.titleFont}>Clearance</Text>
						</View>					
					</TouchableOpacity>
				</View>										
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerCategory: {
		flex: 1,
		backgroundColor: '#D6D6D6'
	},
	rowView: {
		flex: 1,
		flexDirection: 'row',	
	},
	categoryView: {
		flex: 1,
		borderColor: 'gray',
		borderWidth: 1,
		padding: 10
	},
	imageView:{
		flex: 3,
		padding: 20		
	},
	titleView:{
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center', 
	},
	imageStyle:{
		flex: 1, 		
	},
	titleFont:{
		color: 'green',
		fontSize: 20,
		fontWeight: 'bold',
	}	
});