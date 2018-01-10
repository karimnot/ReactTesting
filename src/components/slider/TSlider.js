import React from 'react';
import {
	 View,
	 Text,
	 StyleSheet,
	 Image,
	 ScrollView,
	 TouchableOpacity
} from 'react-native';

import TSliderItem from './TSliderItem';

const _HEIGTH = 300;

export default class ProductsSlider extends React.Component {
	render(){
		return(
			<View style={styles.sectionView}>
				<View style={styles.titleView}>
					<Text style={styles.titleFont}>Title</Text>
				</View>							
				<ScrollView 
					style={styles.productsView}
					horizontal
				>
					<TSliderItem />														
					<TSliderItem />														
				</ScrollView >							
			</View>	
		);
	}

}

const styles = StyleSheet.create({
	sectionView: {
		height: _HEIGTH
	 },
	 titleView:{
		justifyContent: 'center',
		alignItems: 'center',		 
		height: 50,
	 },
	 productsView:{
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',				
	 },
	 titleFont:{
		 fontSize: 20,
		 color: 'black',
		 fontWeight: 'bold'
	 }
});