import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{key: 'Devinq'},
						{key: 'Jacksonw'},
						{key: 'Jamese'},
						{key: 'Joelr'},
						{key: 'Johnt'},
						{key: 'Jilliany'},
						{key: 'Jimmyu'},
						{key: 'Juliei'},
						{key: 'Devino'},
						{key: 'Jacksonp'},
						{key: 'Jamesaaa'},
						{key: 'Joels'},
						{key: 'Johnd'},
						{key: 'Jilliana'},
						{key: 'Jimmya'},
						{key: 'Juliea'},
						{key: 'Devina'},
						{key: 'Jacksona'},
						{key: 'Jamesa'},
						{key: 'Joela'},
						{key: 'Johna'},
						{key: 'Jillians'},
						{key: 'Jimmys'},
						{key: 'Julies'}						
					]}
					renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        			/>
      		</View>
    		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
    		padding: 10,
    		fontSize: 18,
    		height: 44
  	}
});
