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
		backgroundColor: '#F8F8F8',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 10},
		shadowOpacity: 5,
		elevation: 2,
		position: 'relative',
		flex: 1	
	},
	textStyle: {
		fontSize: 30
	}
});

export default Header;