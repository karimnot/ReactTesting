import React, {Component} from 'react';
import {
	Text,
	StyleSheet,
	View
} from 'react-native'; 

const Header = (props) => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create ({
	viewStyle: {
		backgroundColor: 'black',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 10},
		shadowOpacity: 5,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 30,
		color: 'white'
	}
});

export default Header;