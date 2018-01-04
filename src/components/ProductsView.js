import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image, 
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import ProductItemView from './ProductItemView';

export default class App extends Component {

	constructor(props){
		super(props);
		this.state={products:[]};
	}	

	componentWillMount(){
		p = [
			{
				id: '1',
				name: 'Whopper Jr',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				img: 'https://i.pinimg.com/736x/a1/ec/dc/a1ecdc1ce19688bc1b02140439ce576e--product-photography-photography-ideas.jpg'
			},			
			{
				id: '2',
				name: 'Whopper Doble',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
				img: 'https://s3.amazonaws.com/ODNUploads/519570394e139double_whopper_menu.jpg'
			},
			{
				id: '3',
				name: 'Whoper Angry',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u',
				img: 'https://media3.s-nbcnews.com/j/newscms/2016_13/1477761/whopper_b75079eae4fdb61771ab8d77ad4efcbb.nbcnews-ux-2880-1000.jpg'
			},
			{
				id: '4',
				name: 'Big Mac',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem',
				img: 'http://www.eatthis.com/wp-content/uploads//media/images/ext/111576974/mcdonalds-Big-Mac-1024-750.jpg'
			},
			{
				id: '5',
				name: 'Mac Patatas',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem',
				img: 'https://data.whicdn.com/images/1743624/large.jpg'
			}
		];		
		this.setState({products: p});
	}

	renderProducts(){
		return this.state.products.map(product => 
			<ProductItemView 
				key={product.id} 
				title={product.name}
				description={product.description}
				img={product.img} />
		);
	}	

	render() {
		return (
			<ScrollView style={{						
							flex: 1,
							backgroundColor: 'lightgray'
					}}
			>
				<View style={{						
						flex: 1,
						flexDirection: 'column',
						backgroundColor: 'lightgray',
						padding: 10
					}}
				>
					{this.renderProducts()}								
				</View>
			</ScrollView>
		);
    	}
}


const styles = StyleSheet.create({
	container: {
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